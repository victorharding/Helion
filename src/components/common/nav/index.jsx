import { useState } from "react"

import {navLinks} from '../../../data/linksDatta';
import Button from "../button";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
      <nav className="w-full flex  py-6 justify-between  items-center navbar pl-[10px] pr-[20px]">
        <a href="/"> <img src="/assets/logo.svg" alt ="Helion" className="w-[124px] h-[32px]"/></a>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav,index)=>(
            <li   key={nav.id}
            className= {`font-poppins 
            font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}
            text-black`}
            >
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className=" ml-10 sm:flex hidden">
        <Button reference='/contact' btype='button' text="Hire Us"/>
        </div>




        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? '/assets/close.svg' : '/assets/menu.svg'}
            alt = "menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={()=> setToggle((prev)=> !prev)}/>
  
            <div className={`${toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
               <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav,index)=>(
                  <li   key={nav.id}
                    className= {`font-poppins 
                     font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'}
                     text-white`}
                      >
                    <a href={`${nav.id}`}>
                      {nav.title}
                    </a>
                 </li>
                  ))}
                  <li className="mt-6"><Button reference='#contact' btype='button' text="Hire Us"/></li>
               </ul>
            </div>
        </div>
      </nav>
    )
  }

export default Navbar