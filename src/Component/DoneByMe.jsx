import Unilet from '../assets/Unilet.png'
import MyRide from '../assets/MyRide.png'
import Calculator from '../assets/Calculator.svg'
import Cloud from '../assets/clouds.svg'


const DoneByMe = () => {

    return (
        <div id="Portfolio" className="">
            <div className="text-center mt-[2rem]">
                <p className="font-bold text-2xl">Task Completed By Me</p>
                <p>I've tackled a wide range of frontend development tasks, from building responsive interfaces to optimizing performance. Each project showcases my commitment to quality, attention to detail, and ability to deliver effective solutions. Explore the work I've completed to see how I turn ideas into functional, polished web experiences.</p>
            </div>
            <div className="font-semibold grid grid-cols-2 gap-[1rem] place-items-center text-center mt-[1rem] sm:flex sm:justify-center sm:gap-[5rem]">
                <div className="flex gap-[0.5rem] ">
                    <img className='w-[1.5rem]' src={Cloud} alt="" />

                    <a href="https://weather-forecast-red-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-blue-600'>Weather Forecast</a>
                </div>

                {/* <div className="flex gap-[0.5rem]">
                    <img className='w-[3rem]' src={Unilet} alt="" />
                    <p>Unilet.com</p>
                </div> */}

                <div className="flex gap-[0.5rem]">
                    <img className='w-[1.5rem]' src={Calculator} alt="" />
                    <a href="snowdevcalculator.vercel.app." target='_blank' className='text-blue-600'>Calculator</a>
                </div>

                <div className="flex">
                    <img className='w-[1.5rem]' src={MyRide} alt="" />
                    <p className='text-blue-600'>MyRide App</p>
                </div>

            </div>
        </div>
    )
}

export default DoneByMe