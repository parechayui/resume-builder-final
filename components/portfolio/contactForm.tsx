
import { HiOutlinePhone } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { RiSendPlaneLine } from 'react-icons/ri';


export const ContactForm = () => {
  return (
    <div className="container p-5 xl:py-12" id="contact">
      <div className="bg-white px-7 lg:px-16 py-10 rounded shadow flex flex-col sm:flex-row sm:justify-evenly gap-6 sm:gap-8">
        <div className="xl:w-[65%] flex flex-col gap-6 sm:gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold sm:max-w-sm xl:leading-tight opacity-80">
            {'Feel Free to Reach Me to Discuss New Projects'}
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <HiOutlinePhone size={30} color="#1C64F2" />
              <span className="font-bold">{'+1 (123) 456-7890'}</span>
            </div>
            <div className="flex items-center gap-3">
              <AiOutlineMail size={30} color="#1C64F2" />
              <span className="font-bold">{'contact@developer.com'}</span>
            </div>
            <div className="flex items-center gap-3">
              <RiSendPlaneLine size={30} color="#1C64F2" />
              <span className="font-bold">{'c/o eNavis AG, Lithunia'}</span>
            </div>
          </div>
        </div>

        <div className="xl:w-[45%]">
          <form
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="font-medium capitalize text-gray-600"
              >
                {' Name'}
              </label>
              <input
                type="text"
                id="name"
                
                className="outline-none border border-gray-400 rounded-md px-3 py-2 "
              />
             
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-medium capitalize text-gray-600"
              >
                {'Email'}
              </label>
              <input
                type="email"
                id="email"
               
                className="outline-none border border-gray-400 rounded-md px-3 py-2"
              />
             
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="font-medium capitalize text-gray-600"
              >
                {' Phone Number'}
              </label>
              <input
                type="number"
                id="phone"
               
                className="outline-none border border-gray-400 rounded-md px-3 py-2"
              />
           
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="question"
                className="font-medium capitalize text-gray-600"
              >
                {' Comments/Questions'}
              </label>
              <textarea
                id="question"
            
                className="outline-none border border-gray-400 rounded-md px-3 py-2"
              ></textarea>
             
            </div>

            <button
              className={` bg-[#1C64F2] rounded-full py-2.5 text-white mt-4`}
            >
              {'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
