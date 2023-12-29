import React from 'react';
import { RiHome4Line, RiWaterPercentLine, RiPieChart2Line, RiMailLine, RiNotification2Line, RiSettings5Line, RiDoorOpenLine } from "react-icons/ri";



export const Sidebar = () => {
  return (
    <div className='bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full'>
      <ul className='pl-4'>
        <li>
        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
        </li>

        <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
          <a href='#' className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
          <RiHome4Line className='text-xl '/>
          </a>
        </li>

        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href='#' className=' group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
            {/*group: para hacer el hover  */}
          < RiWaterPercentLine className='text-xl '/>
          </a>
        </li>

        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href='#' className=' group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
          < RiPieChart2Line className='text-xl '/>
          </a>
        </li>

        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href='#' className=' group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
          < RiMailLine className='text-xl '/>
          </a>
        </li>

        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href='#' className=' group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
          < RiNotification2Line className='text-xl '/>
          </a>
        </li>

        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href='#' className=' group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
          < RiSettings5Line className='text-xl '/>
          </a>
        </li>

        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href='#' className=' group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
          < RiDoorOpenLine className='text-xl '/>
          </a>
        </li>

      </ul>
    </div>
  )
};

