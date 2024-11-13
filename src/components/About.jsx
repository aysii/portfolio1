import React from 'react';
import mobile from '../assets/b49b45d4-04b5-470a-a0db-5b140c14411d.jpg';

const About = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
      
      <div className="py-16 mb-6 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl">
        <div className="p-7 mx-auto relative">
          <div>
            <h2 className="text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl">
              Hello, I am <span className='italic'>Jameson</span>
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
              Hi! I’m Jameson Isaac J. Manabat, a Cyclist who wants to be a professional in the future and also a Bachelor of Science in Computer Science (BSCS) student at Cavite State University 
              - Bacoor Campus. I’m willing to learn more and expand my knowledge in computer science, continuously improving my skills. This website displays some of the projects I've worked on and the programming languages I've used. 
              In the tech industry, I'm constantly keen to learn more and study new opportunities.
            </p>
          </div>
         
          <img className="flex md:absolute mx-auto bottom-[-10%] right-[16%] w-[240px] md:w-[350px] h-auto overflow-hidden mx-auto rounded-3xl py-8 md:py-0" src={mobile} alt=""/>
        </div>
      </div>

      
      <div className="bg-black/40 max-w-[1300px] mx-auto rounded-xl">
        <div className="px-6 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="block w-full gray-primary-color text-3xl sm:text-4xl">
              Goals
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium
                            leading-relaxed tracking-wide text-gray-400">
              Here are some of my goals to achieve while in and after college.
            </p>
          </div>
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Expand</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                I am eager to expand my knowledge and skills both during and after college. I aim to continuously grow through learning and hands-on experience, seeking opportunities that challenge me and allow me to further develop my expertise in various fields.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Explore</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                I am passionate about exploring different areas of knowledge and skill development throughout my college years and beyond. I’m excited to venture into new fields, embrace diverse learning experiences, and discover pathways that will help me grow both personally and professionally.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Learn</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                I’m driven by a desire to learn continuously during college and beyond. I want to acquire new skills, deepen my understanding across various fields, and embrace every learning opportunity that comes my way to grow both academically and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
