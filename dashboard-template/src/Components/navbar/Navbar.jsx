import React, { useState } from 'react';
import { navLinks } from './utility/Navbardata';
import { useRecoilState } from 'recoil';
import { ActiveTabState } from "../../atoms/ActiveTabState";

function Navbar() {
  return (
    <div className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className='space-y-8 w-full'>
        {navLinks.slice(0,4).map((link) => (
         <Navitems   key={link.id} link={link} />
        ))}

         <div className='w-fiull border bg-gray-300 '></div>
        {navLinks.slice(4,6).map((link) => (
          <Navitems key={link.id} link={link}/>
        ))}
          </div>
          <div className='xl:flex  flex-col hidden items-center justify-center space-y-4 px-4 py-4'>
          <h1 className="text-xl w-full font-medium ">Invest Money</h1>
          <button className="w-full py-3 px-2 bg-gray-300">Invest Now</button>
          </div>
    </div>
  );
}




function Navitems({link}){

  const [activeSidenav, setActiveSidenav] = useRecoilState(ActiveTabState);
  return (
    <div 
      onClick={() => setActiveSidenav(link.id)} 
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-black 
      ${activeSidenav === link.id ? "border-black-400 border-r-4" : "border-transparent"}`}
      // Add the "border-r-4" class conditionally to add a border to the right side
    >
      <span>{link.icon}</span>
      <h1 className='text-gray-600 xl:flex hidden group-hover:text-black'>{link.title}</h1>
    </div>
  )



 
}

export default Navbar;