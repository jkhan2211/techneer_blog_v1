import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="my-4 flex items-center justify-center flex-col">
      <div className="text-4xl flex flex-col w-full items-start">
        <h1 className="font-bold">Technology + Engineer = Techneer</h1>
        <h2>Learn new technologies and become the <span className="font-bold text-5xl">2x</span> the engineer you've always dreamed of being.</h2>
      </div>

        <div className="my-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img src="./temp.jpg" 
              alt="temp" 
              className="rounder w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold">Lore Ipsom</h1>
              <p className="my-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer a justo vel purus vestibulum ullamcorper. 
                Sed a bibendum justo. Vestibulum sed luctus ex, at gravida lorem. Praesent volutpat diam eu dolor accumsan, in porta libero suscipit. 
                In hac habitasse platea dictumst. Proin non mi sed urna tristique fringilla.
              </p>
                <Link className="mt-2 bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 px-4 py-2 rounded text-white">
                  Read More! 
                </Link>
            </div>
        </div>
    
    </div>
  )
};

export default Header