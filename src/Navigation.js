import React, { useState } from "react";
 import { Menu, X } from 'lucide-react';
import DownloadButton from './DownloadButton';

const Navigation = ({img}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#herosection", label: "Home" },
    { href: "#aboutsection", label: "About" },
    { href: "#myworkssection", label: "My Works" },
    { href: "#skillssection", label: "My Skills" },
    { href: "#educationsection", label: "Education" },
    { href: "#contactsection", label: "Contact" }
  ];

  return (
    <div>
     <nav className="navyyy1 fixed w-full z-5000 bg-[#2B2D33]   ">
     <div className="navyyyy px-4 py-3">
        <div className="navyy">
          <div className="navmenu" >
           <img src={img} alt="Logo" className="img112 flex h-8 w-auto" />
          

    <div className="navlist hidden lg:flex items-center space-x-8 ">
           {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-[#F75023] transition-colors text-sm "
              >
                {item.label}
              </a>
            ))}
             <DownloadButton />
               
            
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="horizontal lg:hidden text-white"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {isOpen && (
          <div className="navmenu1 horizontalmenu lg:hidden mt-4 bg-[#2B2D33]">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-white hover:text-[#F75023] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
           
               <DownloadButton />
          
          </div>
        )}
        </div>
      </div>
     </nav>
    </div>
  );
};

export default Navigation;