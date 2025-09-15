import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ items, index = 0 }) => {
  
  return (
    <div className="flex flex-col gap-3 bg-rose-500/5 rounded-lg shadow-sm pt-6 px-4 pb-6 aspect-square transition-all duration-300 hover:scale-105 group relative" onMouseEnter={(e) => {
      e.currentTarget.style.border = '2px solid';
      e.currentTarget.style.borderImage = 'linear-gradient(45deg, #10b981, #f59e0b, #8b5cf6, #f43f5e) 1';
      e.currentTarget.style.boxShadow = '0 0 15px rgba(16,185,129,0.4), 0 0 15px rgba(245,158,11,0.4), 0 0 15px rgba(139,92,246,0.4), 0 0 15px rgba(244,63,94,0.4)';
    }} onMouseLeave={(e) => {
      e.currentTarget.style.border = '';
      e.currentTarget.style.borderImage = '';
      e.currentTarget.style.boxShadow = '';
    }}>
         <div className="w-full flex-shrink-0 flex items-center justify-center"><img src={items.img} alt="" className="rounded object-contain w-full h-40 aspect-square" /></div>
        <div className="w-full flex-1 flex flex-col">
        <h1 className="text-lg font-semibold mb-2">{items.title}</h1>
        <p className="mb-3 text-sm flex-1">{items.description.slice(0, 80)}...</p>
          <Link className="bg-zinc-800 px-3 py-1 rounded text-white hover:bg-zinc-700 transition-all duration-300 text-sm self-start">Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard