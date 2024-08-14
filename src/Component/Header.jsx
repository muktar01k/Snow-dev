import { useState } from 'react'
import Logo from '../assets/Logo.png'
import Hamburger from '../assets/hamburger.svg'
import Setup from '../assets/setup.avif'
import Setup2 from '../assets/setup2.avif'
import Setup3 from '../assets/setup3.avif'


const Header = () => {

    const [toggleHam, setToggleHam] = useState(false)

    function ativeToggle() {
        setToggleHam(!toggleHam)
    }

    return (
        <div className="">
            <nav className='flex justify-center gap-[12rem] pt-[0.5rem] sm:gap-[25rem]'>
                <div className="w-[5rem]">
                    <img src={Logo} alt="" />
                </div>
                <div onClick={ativeToggle} className="w-[5rem] sm:hidden">
                    {toggleHam ? (
                        <p className='font-bold text-5xl w-[5rem] pt-[1rem] ml-[1rem]'>X</p>
                    ) : (
                        <img src={Hamburger} alt="" />
                    )
                    }
                </div>

                <div className="hidden sm:flex sm:justify-center sm:gap-[7rem] sm:pt-[1.5rem] ">
                    <a href="#Home">Home</a>
                    <a href="#AboutUs">About Us</a>
                    <a href="#Experties">Experties</a>
                    <a href="#Portfolio">Portfolio</a>
                    <div className="sm:bg-indigo-200 sm:w-[10rem] sm:h-[3rem] sm:text-center sm:pt-[0.5rem] sm:rounded-xl sm:shadow-xl sm:shadow-grey">
                        <a href="https://wa.me/2349132630151?text=Hello%20there!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20project%20with%20you.">
                            <button>Contact Us</button>
                        </a>
                    </div>
                </div>
            </nav>
            {
                toggleHam && (
                    <div className="bg-green-400 absolute w-[9rem] h-[13rem] space-y-4 mt-[1rem] rounded-xl pl-[1rem] pt-[0.5rem] flex flex-col ml-[14rem] font-semibold sm:hidden">
                        <a href="#Home">Home</a>
                        <a href="#AboutUs">About Us</a>
                        <a href="#Experties">Experties</a>
                        <a href="#Portfolio">Portfolio</a>
                        <a href="https://wa.me/2349132630151?text=Hello%20there!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20project%20with%20you.">
                            <button >Contact Us</button>
                        </a>
                    </div>
                )
            }



            <div id='Home' className="">
                <div className="text-center pt-[6rem] static">
                    <h2 className='font-semibold text-4xl sm:text-5xl'>Hello,Welcome To</h2>
                    <h1 className='font-bold text-5xl sm:text-6xl'>SNOWDEV</h1>
                    <p className='pt-[2rem] text-xl '>Welcome to my digital portfolio! I'm SnowDev, a passionate and driven Frontend Developer with a knack for turning creative visions into functional, user-friendly web applications. My journey into web development began with a fascination for how design and technology intersect to create the digital experiences we interact with every day. Over the years, this curiosity has evolved into a deep commitment to mastering the art and science of frontend development.</p>
                </div>
                <div className="pt-[3rem] md:flex sm:justify-center sm:gap-[4rem]">
                    
                    <div className="border-[0.5rem] border-indigo-600 rounded-[1.5rem] w-[21rem] ml-[1.2rem]">
                        <img className='w-[21rem] h-[11rem] rounded-2xl' src={Setup} alt="" />
                    </div>

                    <div className="hidden sm:border-[0.5rem] sm:border-indigo-600 sm:w-[21rem] sm:rounded-[1.5rem] md:block">
                        <img className='sm:w-[21rem] sm:h-[11rem] sm:rounded-2xl' src={Setup2} alt="" />
                    </div>

                    <div className=" sm:border-[0.5rem] sm:border-indigo-600 sm:w-[21rem] sm:rounded-[1.5rem] md:block hidden">
                        <img className='sm:w-[21rem] sm:h-[11rem] sm:rounded-2xl' src={Setup3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header