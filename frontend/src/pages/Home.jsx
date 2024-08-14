import React from 'react'
import Hero from '../components/Home/Hero'
import RecentBooks from '../components/Home/RecentBooks'

const Home = () => {
  return (
    <div className='bg-black p-0'>
      <Hero/>
      <RecentBooks/>
      </div>
  )
}

export default Home