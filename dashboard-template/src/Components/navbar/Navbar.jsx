import React from 'react';
import { navLinks } from './utility/Navbardata';

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
    </div>
  );
}




function Navitems({link}){

  return(
    <div className='w-full flex items-center justify-start space-x-8 cursor-pointer group hover:border-black border-1-4 border-transparent'>
  <span>{link.icon}</span>
  <h1 className='text-gray-600 xl:flex hidden group-hover:text-black'>{link.title}</h1>
</div>

  )



 
}

export default Navbar;