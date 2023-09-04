import React from 'react'
import Banner from '../../components/banner/Banner'
import FeaturedCategories from '../../components/featured-category/FeaturedCategories'
import FeaturedProducts from '../../components/featured-products/FeaturedProducts'


const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedCategories/>
      <FeaturedProducts/>
    </>
  )
}

export default Home