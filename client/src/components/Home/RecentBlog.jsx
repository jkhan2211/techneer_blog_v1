import React, { useState } from 'react'
import BlogCard from '../BlogCard/blogCard'
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from 'react-icons/hi2'

const RecentBlog = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - document.getElementById('carousel').offsetLeft)
    setScrollLeft(document.getElementById('carousel').scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - document.getElementById('carousel').offsetLeft
    const walk = (x - startX) * 2
    document.getElementById('carousel').scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const blogData = [
    {
      img:"./temp.jpg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a justo vel purus vestibulum ullamcorper. Sed a bibendum justo. Vestibulum sed luctus ex, at gravida lorem. Praesent volutpat diam eu dolor accumsan, in porta libero suscipit. In hac habitasse platea dictumst.Proin non mi sed urna tristique fringilla. Suspendisse luctus posuere ligula, non faucibus turpis fermentum in. Quisque rhoncus bibendum nunc at fermentum. Vivamus auctor blandit nibh, at dapibus elit sagittis in. Donec dictum, nisi ac vehicula vulputate, eros massa finibus urna, nec cursus ex purus nec arcu."
    },
       {
      img:"./temp.jpg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a justo vel purus vestibulum ullamcorper. Sed a bibendum justo. Vestibulum sed luctus ex, at gravida lorem. Praesent volutpat diam eu dolor accumsan, in porta libero suscipit. In hac habitasse platea dictumst.Proin non mi sed urna tristique fringilla. Suspendisse luctus posuere ligula, non faucibus turpis fermentum in. Quisque rhoncus bibendum nunc at fermentum. Vivamus auctor blandit nibh, at dapibus elit sagittis in. Donec dictum, nisi ac vehicula vulputate, eros massa finibus urna, nec cursus ex purus nec arcu."
    },
       {
      img:"./temp.jpg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a justo vel purus vestibulum ullamcorper. Sed a bibendum justo. Vestibulum sed luctus ex, at gravida lorem. Praesent volutpat diam eu dolor accumsan, in porta libero suscipit. In hac habitasse platea dictumst.Proin non mi sed urna tristique fringilla. Suspendisse luctus posuere ligula, non faucibus turpis fermentum in. Quisque rhoncus bibendum nunc at fermentum. Vivamus auctor blandit nibh, at dapibus elit sagittis in. Donec dictum, nisi ac vehicula vulputate, eros massa finibus urna, nec cursus ex purus nec arcu."
    },
    {
      img:"./temp.jpg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a justo vel purus vestibulum ullamcorper. Sed a bibendum justo. Vestibulum sed luctus ex, at gravida lorem. Praesent volutpat diam eu dolor accumsan, in porta libero suscipit. In hac habitasse platea dictumst.Proin non mi sed urna tristique fringilla. Suspendisse luctus posuere ligula, non faucibus turpis fermentum in. Quisque rhoncus bibendum nunc at fermentum. Vivamus auctor blandit nibh, at dapibus elit sagittis in. Donec dictum, nisi ac vehicula vulputate, eros massa finibus urna, nec cursus ex purus nec arcu."
    },
    {
      img:"./temp.jpg",
      title: "DevOps Best Practices",
      description: "Explore the latest DevOps methodologies and tools that can streamline your development workflow. Learn about CI/CD pipelines, containerization, and infrastructure as code."
    },
    {
      img:"./temp.jpg",
      title: "Machine Learning Trends",
      description: "Discover the cutting-edge trends in machine learning and artificial intelligence. From neural networks to deep learning frameworks."
    },
    {
      img:"./temp.jpg",
      title: "Cloud Architecture",
      description: "Master cloud architecture patterns and design principles for scalable, reliable, and cost-effective cloud solutions."
    },
    {
      img:"./temp.jpg",
      title: "Frontend Frameworks",
      description: "Compare modern frontend frameworks and libraries. React, Vue, Angular, and emerging technologies in web development."
    }
  ]
  return (
    <div className="mb-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Read our latest <span className="font-bold">deep dives newsletters</span>, <span className="font-bold">how‑tos</span>, and <span className="font-bold">thought pieces</span> from the world of technology and engineering.</h1>
        <div className="flex gap-2">
          <button 
            onClick={() => document.getElementById('carousel').scrollBy({ left: -300, behavior: 'smooth' })}
            className="p-2 bg-white text-zinc-800 rounded hover:bg-zinc-800 hover:text-white transition-all duration-300"
          >
            <HiMiniArrowSmallLeft size={20} />
          </button>
          <button 
            onClick={() => document.getElementById('carousel').scrollBy({ left: 300, behavior: 'smooth' })}
            className="p-2 bg-white text-zinc-800 rounded hover:bg-zinc-800 hover:text-white transition-all duration-300"
          >
            <HiMiniArrowSmallRight size={20} />
          </button>
        </div>
      </div>
      <div 
        id="carousel" 
        className="flex gap-6 overflow-x-auto scrollbar-hide pt-4 pb-4 justify-center cursor-grab active:cursor-grabbing" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
            {blogData &&
            blogData.map((items, i)=>(
                <div key={i} className="flex-shrink-0 w-full max-w-xs">
                  <BlogCard items={items} index={i} />
                </div>
            ))}
      </div>
      </div>

  )
}

export default RecentBlog