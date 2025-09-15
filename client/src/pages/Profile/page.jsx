import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <div>Profile</div>
      <Link 
        to="/all-blogs" 
        className="inline-block mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
      >
        All Blogs
      </Link>
    </div>
  )
}

export default Profile