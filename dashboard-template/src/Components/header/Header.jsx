import React from 'react'
import {SearchIcon,UserCircleIcon,BellIcon} from  '@heroicons/react/outline'

//we are using heroicons of tailwind to show the icons in our components 
/* step to use this 
1.goto documentation of heroicons in tailwind it will redirect to you on github.
2.intall using by running this in terminal " npm install @heroicons/react "
3.then just simply import and use like we did here " import {SearchIcon} from  '@heroicons/react/outline'"
4.use this like  any other component <SearchIcon /> in the jsx*/




function Header() {
  return (
    <div>
      <nav className="bg-gray-300 p-4 flex justify-between items-center">
        {/* Company Name */}
        <div className="text-black text-lg font-semibold">MyDashboard</div>

        {/* Search Bar - Hidden on Small Screens */}
        <div className="hidden sm:flex flex-1 mx-4 relative"> {/* Hide on small screens */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="w-6 h-6 text-gray-500" />
          </span>
          <input
            type="text"
            className="w-60 py-0 px-10 rounded-md bg-gray-100 text-white focus:outline-none focus:bg-gray-600"
            placeholder="Search..."
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white focus:outline-none">
            <UserCircleIcon className="h-6 w-6 text-black" />
          </button>
          <button className="text-white focus:outline-none">
            <BellIcon className="h-6 w-6 text-black" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
