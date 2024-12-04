import { useLocation } from 'react-router-dom';
import {ChangeEvent, useEffect, useState} from "react";
import {getEvent, patchEventReadiness, postEvent} from "../../api";
import Group from "../group/Group.tsx";
import GroupFiller from "../group/GropupFiller.tsx";

const EventDetail = () => {
    const location = useLocation();
    const [plannedStartDate, setPlannedStartDate] = useState('');
    const [eventData, setEventData] = useState(location.state?.eventData);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await getEvent(eventData.organizer_identifier);
            setEventData(response.data);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const renderGroups = () => {
        const groupsLength: number = eventData.groups?.length;
        const fillerLength: number = 5 - groupsLength;

        let toRender = [];
        for (let i = 0; i < groupsLength; i++) {
            toRender = [...toRender, <Group key={eventData.groups[i].id} details={eventData.groups[i]} uuid={eventData.organizer_id} />]
        }

        for (let i = 0; i < fillerLength; i++) {
            toRender =[...toRender, <GroupFiller key={i+"a"} uuid={eventData.organizer_id} />]
        }

        return toRender;
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPlannedStartDate(e.target.value);
    };

    const handleEventReadiness = async () => {
        try {
            const dateTime = plannedStartDate.replace(" ", "T")
            await patchEventReadiness(eventData.organizer_id, dateTime);
        } catch {
            setHasError(true);
            setErrorMessage("Something went wrong, please try again!");

            setTimeout(() => {
                setHasError(false);
                setErrorMessage(null);
            }, 5000);
        }
    }

    return (
        <div className="bg-[#2E003E] p-8 rounded-xl shadow-xl w-11/12 max-w-8xl mt-16">
            <h2 className="text-3xl font-bold text-lime-400">Event Details</h2>
            <div className="text-xl text-white flex p-2">
                <p className="flex-auto">planned start: {eventData.planned_start ? transformDate(eventData.planned_start) : "-"}</p>
                <div>
                    <input
                        type="text"
                        value={plannedStartDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg bg-[#3f015f] text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 ${eventData.ready ? "hidden" : ""} ${hasError ? 'border-2 border-red-500 shake' : ''}`}
                        placeholder="2024-12-19 20:06"
                        maxLength={16}
                    />
                    <div className={`error-message ${hasError ? 'block' : 'hidden'}`}>
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                        )}
                    </div>
                    <button
                        className="w-full select-none rounded bg-[#4E006E] hover:bg-lime-400 p-1 text-center text-xs align-middle font-sans font-bold uppercase text-white transition-all hover:shadow-lg peer-placeholder-shown:pointer-events-none"
                        type="button"
                        data-ripple-light="true"
                        hidden={eventData.ready}
                        onClick={handleEventReadiness}
                    >
                        Ready!
                    </button>
                </div>
            </div>

            <div className="text-3xl flex">
                {renderGroups()}
            </div>
        </div>
    );
};

const transformDate = (date: string) => {
    return date.substring(0, 19).replace("T", " ")
}
export default EventDetail;
