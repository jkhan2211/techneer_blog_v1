import React from 'react'
import Header from "../../components/Home/Header";
import Categories from '../../components/Home/Categories';
import RecentBlog from '../../components/Home/RecentBlog';

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <RecentBlog />
    </div>
  )
}

export default Home;