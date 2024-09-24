import React from 'react'
//import { VscTasklist } from "react-icons/vsc";
const Navbar = () => {
  return (
    
        <nav className="flex justify-between bg-indigo-800 text-white py-3">
            <div className="logo font-bold text-xl mx-8 "><span>iTask</span>
            </div>
            <ul className="flex gap-8 mx-8">
                <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all duration-75'>Tasks</li>
            </ul>
        </nav>
    
  )
}

export default Navbar;