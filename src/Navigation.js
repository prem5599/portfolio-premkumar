import React, { useState } from "react";
 import { Menu, X } from 'lucide-react';
import DownloadButton from './DownloadButton';

const Navigation = ({img}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#aboutsection", label: "About" },
    { href: "#myworkssection", label: "My Works" },
    { href: "#skillssection", label: "My Skills" },
    { href: "#educationsection", label: "Education" },
    { href: "#contactsection", label: "Contact" }
  ];

  return (
    <nav className="navyyy1 fixed top-0 left-0 right-0 z-5000 bg-[#2B2D33] shadow-lg space-y-4">
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
            <a
              href="/resume.pdf"
              download
              className=" block w-full text-center px-4 py-2 mt-4 text-white border border-[#F75023] rounded-full hover:bg-[#F75023] transition-colors"
              onClick={() => setIsOpen(false)}
            >
               <DownloadButton />
            </a>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;