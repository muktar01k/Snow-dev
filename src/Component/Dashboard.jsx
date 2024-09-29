import { useState } from "react"
import AboutUs from "./AboutUs"
import DoneByMe from "./DoneByMe"
import Experties from "./Experties"
import Footer from "./Footer"
import Header from "./Header"
import ReachOut from "./ReachOut"
import Skills from "./Skills"
// import Whatsapp from "./Whtasapp"



const Dashboard = () => {

    const [darkMode, setDarkMode] = useState(false)

    const handleDarkMode = () => {
        setDarkMode(preMode => !preMode)
    }

    return (
        <div className={darkMode ? "bg-gray-500 text-black" : "bg-[#dbd7fb]"}>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <Header unknown={handleDarkMode} />
                <Experties />
                <AboutUs />
                <DoneByMe />
                <Skills />
                <ReachOut />
                <Footer />
                {/* <Whatsapp/> */}
            </div>
        </div>
    )
}

export default Dashboard