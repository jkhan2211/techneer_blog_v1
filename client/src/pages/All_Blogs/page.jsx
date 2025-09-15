import React from 'react'
import AllBlogCard from '../../components/BlogCard/AllBlogCard'; 



const AllBlogs = () => {
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
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">All Blogs</h1>
      <div className="flex flex-col gap-6">
        {blogData &&
          blogData.map((items, i) => (
            <AllBlogCard key={i} items={items} />
          ))}
      </div>
    </div>
  )
}

export default AllBlogs