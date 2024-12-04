import Header from "./components/Header.tsx";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Finder from "./components/eventFinder/EventFinder.tsx";
import Detail from "./components/eventDetail/EventDetail.tsx";

function App() {

    return (
        <>
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#2E003E] via-[#4B1F6F] to-[#2E003E] p-6 ">
                <Router>
                    <Routes>
                        <Route path="/" element={<Finder/>}/>
                        <Route path="/events" element={<Detail/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
