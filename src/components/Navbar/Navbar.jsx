import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Logo from '../../assets/logo.png'

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/" },
  { id: 3, name: "About", link: "/" },
  { id: 4, name: "Blogs", link: "/" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/" },
  { id: 2, name: "Best Selling", link: "/" },
  { id: 3, name: "Top Rated", link: "/" },
];

const Navbar = ({handleOrderPopup}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <a
              href="/"
              className="flex gap-3 text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              <img src={Logo} alt="Logo" className="h-10 w-10" />
              E-Shop
            </a>
            <button
              className="lg:hidden text-gray-600 dark:text-gray-400 text-2xl mx-auto"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex flex flex-col lg:flex-row gap-4 items-center`}
          >
            <ul className="flex flex-col lg:flex-row gap-4 items-center">
              {MenuLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li className="relative cursor-pointer group">
                <a
                  href="#"
                  className="flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                >
                  Quick Links
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                  <ul className="space-y-2">
                    {DropdownLinks.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="input"
                placeholder="Search..."
                className="search-bar"
              />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200 cursor-pointer" />
            </div>

            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
