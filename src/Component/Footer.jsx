import Logo from '../assets/LogoS.png'
// import WhatsappIcon from '../assets/Whatsapp.svg'
import GitLogo from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Whats from '../assets/whats.svg'

const Footer =()=>{

    return(
        <div className="">
            <div className="bg-indigo-200 mt-[2rem]  ">
                <img className='w-[5rem] ml-[8.5rem] mt-[2rem] sm:w-[10rem] sm:ml-[45rem]' src={Logo} alt="" />
           
            <div className="flex justify-center gap-[2rem] text-grey mt-[1rem] sm:text-center sm:gap-[3rem]">
                <p>Home</p>
                <p>About Us</p>
                <p>Portfolio</p>
                <a href="https://wa.me/2349132630151?text=Hello%20there!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20project%20with%20you.">
                <p>Contact Us</p>
                </a>
            </div>
            <div className="flex justify-center gap-[2rem] pt-[4rem]">
                <div className="w-[2rem]">
                    <a href="https://github.com/muktar01k">
                    <img src={GitLogo} alt="" />
                    </a>
                </div>
                <div className="w-[2rem]">
                    <img src={Instagram} alt="" />
                </div>
                <div className="w-[2rem]">
                    <a href="https://wa.me/2349132630151?text=Hello%20there!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20project%20with%20you.">
                    <img src={Whats} alt="" />
                    </a>
                </div>
            </div>
            <hr className='w-[18rem] h-[0.3rem] ml-[2.5rem] mt-[5rem] sm:w-[60rem] sm:ml-[15rem] sm:h-[1rem]'/>
            <p className='text-center'>CopyRight@snow-dev 2024</p>
        </div>
        {/* <div className="">  <img className='w-[5rem] absolute left-[16rem]' src={WhatsappIcon} alt="" /> </div> */}
        </div>
    )
}

export default Footer