import {ChangeEvent, useEffect, useState} from "react";
import {postAttender, signAttender} from "../../api";


const Attender = ({details, ready, uuid, id: group_id}) => {

    const [nickname, setNickname] = useState("");

    useEffect(() => {
        console.log(details)
    }, [details]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
        console.log(nickname)
    };

    const handleAdd = async () => {
       try {
           await postAttender(uuid, group_id, nickname)
       } catch (error) {
           console.log(error)
           setNickname("");
           console.log(nickname)
       }
    }

    const handleSign = async () => {
        await signAttender(uuid, group_id, details.id, nickname)
    }

    const nicknameDisplayed = () => {
        return details?.required_profession && details?.nickname;
    }

    const labelDisplay = () => {
        return nicknameDisplayed() ? details?.nickname : details?.required_profession;
    }

    return (
        <div className="HHH bg-[#250035] rounded-xl p-2 m-2 shadow-xl flex items-center">
            <div className={`relative h-10 w-full min-w-[200px] ${ready ? "flex" : "flex"}`}>
                <button
                    className="!absolute w-1/5 -right-4 top-2 z-10 select-none rounded bg-[#4E006E] hover:bg-lime-400 p-1 text-center text-xs align-middle font-sans font-bold uppercase text-white transition-all hover:shadow-lg peer-placeholder-shown:pointer-events-none"
                    type="button"
                    data-ripple-light="true"
                    hidden={details?.required_profession}
                    onClick={handleAdd}
                >
                    add
                </button>
                <button
                    className="!absolute w-1/5 -right-4 top-2 z-10 select-none rounded bg-[#4E006E] hover:bg-lime-400 p-1 text-center text-xs align-middle font-sans font-bold uppercase text-white transition-all hover:shadow-lg peer-placeholder-shown:pointer-events-none"
                    type="button"
                    data-ripple-light="true"
                    hidden={!details?.required_profession}
                    onClick={handleSign}
                >
                    sign
                </button>
                <input
                    className={`peer h-full w-10/12 rounded-[7px] border border-[#250035] bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-lime-400 placeholder-shown:border-t-lime-400 focus:border-2 focus:border-lime-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                    placeholder={""}
                    required
                    onChange={handleInputChange}
                    value={nickname}
                />
                <label
                    className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-10/12 select-none text-[11px] font-normal leading-tight text-lime-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#250035] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#250035] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-lime-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-lime-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-lime-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-lime-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-lime-400`}>
                    {labelDisplay()}
                </label>
            </div>
        </div>
    )
};

export default Attender;