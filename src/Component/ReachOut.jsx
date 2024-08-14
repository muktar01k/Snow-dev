import Hamburger from '../assets/hamburger.svg'
import Location from '../assets/Location.svg'
import Email from '../assets/email.svg'
import Phone from '../assets/Phone.svg'
import LinkedIn from '../assets/LinkedIn.svg'


const ReachOut = () => {

    return (
        <div className="sm:pt-[3rem]">
            <p className='font-bold text-2xl text-center mt-[2rem]'>Reach Out To Us:</p>
            <div className="mt-[1rem] w-[18rem] h-[30rem] bg-indigo-200 rounded-xl space-y-8  pt-[1rem] sm:pt-[3.5rem] ml-[2.5rem] sm:w-[60rem] sm:h-[18rem] sm:flex sm:justify-center sm:gap-[4rem] sm:ml-[15rem]">
                <div className="">
                    <img className='w-[3rem] h-[2rem] item-center ml-[7rem] sm:ml-[3rem] sm:h-[4rem] sm:w-[2rem]' src={Location} alt="" />
                    <p className='text-center font-bold text-xl'>Location:</p>
                    <p className='text-center'>Lagos state, Nigeria</p>
                </div>

                <div className="">
                    <img className='w-[3rem] h-[2rem] ml-[7rem] sm:ml-[5rem]' src={Email} alt="" />
                    <p className='text-center font-bold text-xl'>Email address:</p>
                    <p className='text-center'>adekanyeadewale7@gmail.com</p>
                </div>

                <div className="">
                    <img className='w-[3rem] h-[2rem] ml-[7rem] sm:ml-[2.5rem]' src={Phone} alt="" />
                    <p className='text-center font-bold text-xl'>Contact Us:</p>
                    <p className='text-center'>+234 9132630151</p>
                </div>

                <div className="">
                    <img className='w-[3rem] h-[2rem] ml-[7rem] sm:ml-[2.5rem]' src={LinkedIn} alt="" />
                    <p className='text-center font-bold text-xl'>LinkedIn:</p>
                    <p className='text-center'>Lagos,Lagos Nigeria</p>
                </div>
            </div>
        </div>
    )
}

export default ReachOut