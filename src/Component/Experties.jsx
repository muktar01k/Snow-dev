import WebIcon from '../assets/webIcon.svg'
import App from '../assets/App.svg'

const Experties = () => {

    return (
        <div  className="">
            <div id='Experties' className="text-center mt-[3rem]">
                <h3 className="font-bold text-3xl">Expert In...</h3>
                <div className="sm:flex sm:justify-center sm:gap-[20rem] sm:pt-[2rem]">
                <div className="bg-indigo-100 mt-[1rem] w-[22rem] items-center h-[4rem] flex justify-center gap-[1rem] ml-[1rem] rounded-xl shadow-xl shadow-grey sm:flex sm:justify-center sm:gap-[]">
                    <img className='w-[3rem] mt-[0.5rem]' src={WebIcon} alt="" />
                    <div className="">
                    <p className='font-semibold text-xl'>Web Development</p>
                    <p>We Provide Top Notch Of Websites..</p>
                    </div>
                </div>

                <div className="bg-indigo-100 mt-[1rem] w-[22rem] items-center h-[4rem] flex justify-center gap-[1rem] ml-[1rem] rounded-xl shadow-xl shadow-grey">
                    <img className='w-[3rem] mt-[0.5rem]' src={App} alt="" />
                    <div className="">
                    <p className='font-semibold text-xl'>App Development</p>
                    <p>We Provide Top Notch Of Apps..</p>
                    </div>
                </div>
                </div>
            </div>
            <hr className='w-[19rem] items-center h-[0.2em] bg-[grey] mt-[2rem] ml-[2.5rem] sm:w-[72rem] sm:ml-[12rem]' />
            
        </div>
    )
}

export default Experties