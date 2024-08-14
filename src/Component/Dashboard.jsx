import AboutUs from "./AboutUs"
import DoneByMe from "./DoneByMe"
import Experties from "./Experties"
import Footer from "./Footer"
import Header from "./Header"
import ReachOut from "./ReachOut"
import Skills from "./Skills"
// import Whatsapp from "./Whtasapp"



const Dashboard = () => {

    return (
        <div className="bg-[#dbd7fb] static">
            <Header />
            <Experties />
            <AboutUs />
            <DoneByMe />
            <Skills />
            <ReachOut />
            <Footer />
            {/* <Whatsapp/> */}
        </div>
    )
}

export default Dashboard