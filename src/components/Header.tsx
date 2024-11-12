

const Header = () => {
    const myStyle = {
        fontFamily: "Doto",
        fontWeight: "bold",
    }

    return (
        <div>
            <header
                className='text-3xl text-left doto'
                style={myStyle}>
                raid planner
            </header>
        </div>
    );
};

export default Header;