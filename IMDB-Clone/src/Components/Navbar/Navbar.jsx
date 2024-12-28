import React from 'react'
import logo from '../../assets/action_clapperboard_film_movie_clapper-1024.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-10 items-center pl-5 py-4'>
        <Link to="/"><img src={logo} alt=""  className='w-[50px]'/></Link>

        <Link to="/" className='text-blue-500 text-3xl font-bold'>Home</Link>
        <Link to="/watchlist"  className='text-blue-500 text-3xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar