const Header = () => {
    const headerStyle = {
        fontFamily: "Doto",
        fontWeight: "bold",
    }

    return (
        <header
            className='text-4xl text-left fixed p-10 text-lime-400'
            style={headerStyle}
        >
            raid planner
        </header>

    );
};

export default Header;