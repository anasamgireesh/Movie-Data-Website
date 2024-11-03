import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='nav-bar'>

        <Link to={"/movies"} ><img src='https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png' className='nav-logo'/></Link>

        <Link to={"/movies"} ><p>Movies</p></Link>

        <Link to={"/watchlist"}><p>Watchlist</p></Link>

    </div>
    
    </>
  )
}

export default Navbar