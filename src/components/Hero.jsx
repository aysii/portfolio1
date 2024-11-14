import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

import notebookL from '../assets/451441753_476859931732183_1426906919163434044_n.jpg';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-10 sm:pt-16 sm:pb-16 overflow-hidden h-[92vh] bg-[#223]/30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-6xl gray-primary-color">
            Computer Scientist
          </h1>
          <p className="mt-5 text-base text-white sm:text-xl">
            3rd Year Computer Science Student. Welcome To My Website Portfolio!
          </p>

          <div className="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
            <a href="https://github.com/aysii" className="transition-all duration-200 hover:scale-110 cursor-pointer">
              <AiFillGithub className="w-[70px] h-auto" />
            </a>
            <a href="https://www.instagram.com/aysii_senju/profilecard/?igsh=MW1nYW5wMDJ6dzc5bQ==" className="transition-all duration-200 hover:scale-110 cursor-pointer">
              <AiFillInstagram className="w-[70px] h-auto" />
            </a>
            <a href="https://www.facebook.com/jameson.manabat?mibextid=ZbWKwL" className="transition-all duration-200 hover:scale-110 cursor-pointer">
              <AiFillFacebook className="w-[70px] h-auto" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center mt-10 md:mt-16">
          <img 
            className="rounded-3xl 
                      w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] 
                      h-auto"
            src={notebookL} 
            alt="Notebook Large" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
