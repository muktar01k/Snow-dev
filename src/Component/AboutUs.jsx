import Think1 from '../assets/think1.svg'
import Think2 from '../assets/think2.svg'
import Think3 from '../assets/think3.svg'
import Desktop from '../assets/desktop.svg'



const AboutUs = () => {

  return (
    <div className="">
      <div className="">
        <div id="AboutUs" className="text-center pt-[2rem]">
          <p className='font-bold text-2xl '>A Creative Thinker And Problem Solver, Ready To Help Your Company Succed</p>
          <p className='mt-[1rem]'>In the fast-paced world of technology, where innovation and efficiency are key to staying ahead, having a creative thinker and problem solver on your team is invaluable. My approach to frontend development is rooted in a deep understanding of both design aesthetics and functional performance. I believe that every challenge presents an opportunity to create something remarkable, and I’m passionate about turning complex problems into elegant solutions. Your company’s success is my priority. I understand that in today’s competitive landscape, standing out requires more than just a good product—it requires a product that is thoughtfully designed, efficiently built, and seamlessly integrated into the user’s life. With my creative mindset and problem-solving abilities, I’m equipped to tackle any challenge and deliver results that will help your company thrive.</p>
        </div>
        <div className="flex justify-center sm:gap-[10rem] gap-[1rem]">
          <div className="sm:w-[15rem] w-[7rem]  mt-[1rem]">
             <img src={Think1} alt="" />
          </div>

          <div className="w-[7rem] sm:w-[15rem] mt-[1rem]">
              <img src={Think2} alt="" />
          </div>

          <div className="w-[7rem] sm:w-[15rem] sm:mt-[1rem] mt-[1rem]">
             <img src={Think3} alt="" />
          </div>
        </div>
      </div>


      <div className="">
        <div className="text-center mt-[2rem] sm:mt-[3rem]">
          <p className="font-bold text-2xl">Let's Build Something Amazing Together...</p>
        </div>
        <div className="sm:flex sm:justify-center text-center sm:gap-[5rem]">
          <div className="">
          <p className="mt-[1rem] sm:w-[30rem] sm:mt-[11rem]">I'm always on the lookout for exciting projects and collaborations. Whether you're a startup in need of a sleek, modern website, or an established company looking to revamp your online presence, I'm here to help. Together, we can create digital experiences that not only meet your goals but exceed your expectations.</p>
          <a href="https://wa.me/2349132630151?text=Hello%20there!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20project%20with%20you.">
           <button className='bg-indigo-200 w-[9rem] h-[3rem] text-center rounded-[2rem] shadow-lg shadow-grey sm:mt-[1rem]'>Contact Us</button>
           </a> 
            </div>
          <div className="w-[20rem] ml-[2rem] sm:w-[30rem] ">
              <img src={Desktop} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs