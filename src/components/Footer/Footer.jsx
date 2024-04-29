import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/'
  },
  {
    title: 'Contact',
    link: '/'
  },
  {
    title: 'Blog',
    link: '/'
  }
]

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="/"
              className="flex gap-3 text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              E-Shop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione velit reprehenderit porro dolores quod!</p>
            <p className="text-gray-500 mt-4">Made By Prabal Bhandary</p>
            <a href="https://www.youtube.com/@prajwol275" target="_blank" className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full hover:scale-105">Visit Our YouTube Channel</a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 hover:scale-105">Important Links</h1>
              <ul className="space-y-3">
                {
                  FooterLinks.map((data,index)=>(
                    <li key={index}>
                      <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 hover:scale-105">{data.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 hover:scale-105">Quick Links</h1>
              <ul className="space-y-3">
                {
                  FooterLinks.map((data,index)=>(
                    <li key={index}>
                      <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 hover:scale-105">{data.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3 hover:scale-105">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Bhadrabas, Kathmandu</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+977-9865475613</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/prabalb44/" target="_blank">
                    <FaInstagram className="text-3xl hover:text-primary duration-300 hover:scale-105" />
                  </a>
                  <a href="https://www.facebook.com/prabal.bhandary.5" target="_blank">
                    <FaFacebookF className="text-3xl hover:text-primary duration-300 hover:scale-105" />
                  </a>
                  <a href="https://www.linkedin.com/in/prabal-bhandary-421811279/" target="_blank">
                    <FaLinkedinIn className="text-3xl hover:text-primary duration-300 hover:scale-105" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
