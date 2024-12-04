import {postGroup} from "../../api";

const GroupFiller = ({uuid}) => {

    const handleSelectChange = async (event) => {
        await postGroup(uuid, event.target.value);
    };

    return (
        <div className="bg-[#250035] rounded-xl p-1 m-2 shadow-xl w-full text-white text-center hover:bg-lime-400 cursor-pointer shrink">
            <div className="relative">
                <select
                    id="profession"
                    onChange={handleSelectChange}
                    className="block w-full px-4 py-2 bg-[#3f015f] text-sm text-white rounded-lg appearance-none focus:outline-none focus:ring-0 focus:ring-lime-400 focus:border-lime-400 cursor-pointer"
                    defaultValue={""}
                >
                    <option value="" disabled>
                        Party type
                    </option>
                    <option value="MAGE">MAGE</option>
                    <option value="MELEE">MELEE</option>
                    <option value="ARCHER">ARCHER</option>
                    <option value="KILL">KILL</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

        </div>
    )
};

export default GroupFiller;