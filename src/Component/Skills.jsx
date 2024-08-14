import Hamburger from '../assets/hamburger.svg'
import HTML from '../assets/html.png'
import Css from '../assets/Css.png'
import Java from '../assets/Java.png'
import React from '../assets/react.svg'
import Tailwind from '../assets/Tailwind.png'


const Skills = () => {

    return (
        <div className="">
            <div id='Skills' className="">
                <p className="text-center font-bold text-2xl mt-[2rem]">My Skills..</p>
                <div className="pt-[1rem] space-y-4 sm:grid sm:grid-cols-3 sm:content-center">
                    <div className="flex justify-center w-[19rem] h-[4rem] rounded-xl gap-[8rem] bg-indigo-200 text-center ml-[2.5rem] shadow-xl shadow-grey">
                        <p className='font-bold text-xl mt-[1rem]'>HTML</p>
                        <img className='w-[4rem]' src={HTML} alt="" />
                    </div>

                    <div className="flex justify-center w-[19rem] h-[4rem] rounded-xl gap-[9rem] bg-indigo-200 text-center ml-[2.5rem] shadow-xl shadow-grey">
                        <p className='font-bold text-xl mt-[1rem]'>CSS</p>
                        <img className='w-[3.5rem] h-[3.5rem]' src={Css} alt="" />
                    </div>

                    <div className="flex justify-center w-[19rem] h-[4rem] rounded-xl gap-[4rem] bg-indigo-200 text-center ml-[2.5rem] shadow-xl shadow-grey">
                        <p className='font-bold text-xl mt-[1rem]'>JAVASCRIPT</p>
                        <img className='w-[4rem]' src={Java} alt="" />
                    </div>

                    <div className="flex justify-center w-[19rem] h-[4rem] rounded-xl gap-[4rem] bg-indigo-200 text-center ml-[2.5rem] shadow-xl shadow-grey">
                        <p className='font-bold text-xl mt-[1rem]'>REACT</p>
                        <img className='w-[4rem]' src={React} alt="" />
                    </div>

                    <div className="flex justify-center w-[19rem] h-[4rem] rounded-xl gap-[4rem] bg-indigo-200 text-center ml-[2.5rem] shadow-xl shadow-grey">
                        <p className='font-bold text-xl mt-[1rem]'>TAILWINDS</p>
                        <img className='w-[3rem]' src={Tailwind} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills