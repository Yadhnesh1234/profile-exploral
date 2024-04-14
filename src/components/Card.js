import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Card = ({openDialog}) => {
  const [showSummary, setShowSummary] = useState(false);

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };
  
  return (
    <>
    <div className="relative">
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Mountain" />
        </div>
        <div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img className="object-cover object-center h-32" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Woman looking front" />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">Sarah Smith</h2>
            <p className="text-gray-500">Freelance Web Designer</p>
          </div>
          <ul className="py-4  text-gray-700 flex items-center justify-around">
            <li className='flex justify-center'>
            <LocationOnIcon/>
            <div className="text-bold">NewYork, Washington DC</div>      
            </li>
          </ul>
          <div className={`absolute bottom-[5rem] w-full bg-white overflow-hidden transition-height duration-500 ${showSummary ? 'h-[46%]' : 'h-0'}`}>
            <div className="p-4">
              <p class="text-center">
                I'm a freelance web designer passionate about creating user-friendly and visually appealing websites.
              </p>
            </div>
          </div>
        </div>
        <div className=" py-8 border-t mx-8 mt-2 flex justify-between">
        <button className="w-[38%] block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2" onClick={()=>{openDialog()}}>Locate Me</button>
          <button className="w-[38%] block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2" onClick={toggleSummary}>{showSummary ? 'Hide' : 'Summary'}</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;
