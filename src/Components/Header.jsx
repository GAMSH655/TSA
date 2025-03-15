import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const handleNav = () => {
        setOpenNav(!openNav);
    };

    const NavLinks = [
        { path: "#", pathName: "Home" },
        { path: "#", pathName: "About" },
        { path: "#", pathName: "Resume" },
        { path: "#", pathName: "Portfolio" },
        { path: "#", pathName: "Blog" },
        { path: "#", pathName: "Contact" },
    ];

    return (
        <div className="sticky top-0 w-full bg-white shadow-md z-50">
            <div className="flex justify-between p-4">
                <h3 className="font-bold text-5xl uppercase">Tsa</h3>
                <div className="hidden md:flex space-x-4">
                    {NavLinks.map(({ path, pathName }, index) => (
                        <a
                            href={path}
                            key={index}
                           className='p-2 m-2 text-black hidden md:inline  text-xl font-normal capitalize'
                        >
                            {pathName}
                        </a>
                    ))}
                </div>
                <button className="md:hidden" onClick={handleNav}>
                       <FaBars className="text-2xl" />
                </button>
            </div>

            {/* Mobile Navigation (absolute overlay) */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/50 ${
                    openNav ? "block" : "hidden"
                }`}
                onClick={handleNav}
            ></div>
            <div
                className={`md:hidden fixed top-0 left-0 h-screen bg-white shadow-md w-3/4 max-w-xs transform ${
                    openNav ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <button className="absolute top-5 right-5" onClick={handleNav}>
                    <FaTimes className="text-2xl" />
                </button>
                <div className="flex flex-col items-center pt-20">
                    {NavLinks.map(({ path, pathName }, index) => (
                        <a
                            href={path}
                            key={index}
                            className="className='p-2 m-2 text-black  text-center  text-xl font-normal capitalize block md:hidden"
                        >
                            {pathName}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
