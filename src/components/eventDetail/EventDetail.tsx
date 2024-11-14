import { useLocation } from 'react-router-dom';

const EventDetail = () => {
    const location = useLocation();
    const eventData = location.state?.eventData;
    console.log("From event detail: " + location.state?.eventData);

    return (
        <div className="bg-[#2E003E] p-8 rounded-xl shadow-xl max-w-sm w-full">
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Event Details</h2>
            <div className="space-y-4">
                {eventData ? (
                    <>
                        <p className="text-white">Event UUID: {eventData.created_at}</p>
                        <p className="text-white">Event Name: {eventData.organizer_id}</p>
                        <p className="text-white">Event Date: {eventData.date}</p>
                    </>
                ) : (
                    <p className="text-red-500">No event data available</p>
                )}
            </div>
        </div>
    );
};

export default EventDetail;
