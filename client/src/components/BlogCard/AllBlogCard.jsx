import React from 'react'
import { Link } from 'react-router-dom'

const AllBlogCard = ({ items }) => {
  return (
    <div className="flex flex-row gap-4 bg-rose-500/5 rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300">
      <div className="w-2/6">
        <img src={items.img} alt="" className="rounded object-cover w-full h-48" />
      </div>
      <div className="w-4/6">
        <h1 className="text-2xl font-semibold mb-2">{items.title}</h1>
        <p className="mb-4 text-gray-700">{items.description.slice(0, 200)}...</p>
        <Link className="bg-zinc-800 px-4 py-2 rounded text-white hover:bg-zinc-700 transition-all duration-300">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default AllBlogCard