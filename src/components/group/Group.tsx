import Attender from "../attender/Attender.tsx";


const Group = ({details, uuid}) => {


    const renderAttenders = () => {
        const attendersLength: number = details.attenders ? details.attenders.length : 0;

        let toRender = [];
        for (let i = 1; i < attendersLength + 1; i++) {

            toRender = [...toRender, <Attender key={i} details={details.attenders[i-1]} ready={details?.ready} uuid={uuid} id={details?.id}/>]
        }

        for (let i = attendersLength; i < 10; i++) {
            toRender = [...toRender, <Attender key={i+"a"} details={undefined} ready={details?.ready} uuid={uuid} id={details?.id}/>]
        }
        return toRender;
    }

    return (
        <div className="bg-[#250035] rounded-xl p-2 m-2 shadow-xl w-9/12">
            <p
                className="text-center text-lime-100 text-2xl"
            >{details.group_type}</p>
            {
                renderAttenders()
            }

            {/*{<Attender details={attenders[0]} ready={details?.ready} uuid={uuid} id={details?.id}/>}*/}
            {/*<Attender details={attenders[1]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
            {/*<Attender details={attenders[2]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
            {/*<Attender details={attenders[3]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
            {/*<Attender details={attenders[4]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
            {/*<Attender details={attenders[5]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
            {/*<Attender details={attenders[6]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
            {/*<Attender details={attenders[7]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
            {/*<Attender details={attenders[8]} ready={details?.ready} uuid={uuid} id={details?.id}/>*/}
        </div>
    )
};

export default Group;