import { ChangeEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getEvent } from "../../api";
import "./EventFinder.css";

const EventFinder = () => {
    const [uuid, setUuid] = useState('');
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUuid(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await getEvent(uuid);
            console.log(response.data)
            navigate("/events",  { state: { eventData: response.data } });
        } catch {
            setHasError(true);
            setErrorMessage("Event not found! Please check the UUID.");

            setTimeout(() => {
                setHasError(false);
                setErrorMessage(null);
            }, 5000);
        }
    };

    const handleCreateNewEvent = () => {
        navigate("/create-event");
    };

    return (
        <>
            <div className="bg-[#2E003E] p-8 rounded-xl shadow-xl max-w-sm w-full">
                <h2 className="text-3xl font-bold text-lime-400 mb-4">
                    Find your event
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <label htmlFor="uuid" className="block text-lg text-white mb-2">Enter Event UUID</label>
                        <input
                            id="uuid"
                            type="text"
                            value={uuid}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 rounded-lg bg-[#3f015f] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 ${hasError ? 'border-2 border-red-500 shake' : ''}`}
                            placeholder="e.g. 123e4567-e89b-12d3-a456-426614174000"
                        />
                    </div>

                    <div className={`error-message ${hasError ? 'block' : 'hidden'}`}>
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 text-lg font-semibold text-lime-400 bg-[#2E003E] hover:bg-[#3D1A56] rounded-lg border-2 border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    >
                        Find Event
                    </button>
                </form>
                <p
                    onClick={handleCreateNewEvent}
                    className="text-lime-400 text-sm mt-2 text-center cursor-pointer underline"
                >
                    Create new event!
                </p>
            </div>
        </>
    );
};

export default EventFinder;
