import React from 'react'
import { useState } from 'react'

function Watchlist() {

  const [Val, setVal] = useState('')

  const addInput = (e) => {
    setVal(e.target.value)
  }
  return (
    <>

    <div className="genre">
      <div className='genre-1'>Action</div>
      <div className='genre-1'>Horror</div>
      <div className='genre-1'>Musical-Fantasy</div>
      <div className='genre-1'>Science-Fiction</div>
    </div>

    <div className="search">
      <input type='text' onChange={addInput} value={Val} className='search-bar' placeholder='Search for movies...' />
    </div>

    <div className="table-div">
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ratings</th>
          <th>Popularity</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        <tr className='row-1'>
          <td className='data-1'> <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqimh4wcZD5o2x7jWJjIP5nKScMSwoyR-IJMYNueaVEExrNygvwwpUpiDCph6Ic3X-hlah' className='image1'/><p>Oppenheimer</p></td>
          <td>9.5</td>
          <td>250000</td>
          <td>Science-Fiction</td>
          <td className='delete'><button>Delete</button></td>
        </tr>
        <tr className='row-1'>
          <td className='data-1'> <img src='https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg' className='image1'/><p> Guardians of Galaxy volume 2</p></td>
          <td>9</td>
          <td>200000</td>
          <td>Action</td>
          <td className='delete'><button>Delete</button></td>
        </tr>
        <tr className='row-1'>
          <td className='data-1'> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBkTcKMFNMsLbf1N6I_KNAPPLBRg3pkOhAA&s' className='image1'/><p>The Conjurring 2</p></td>
          <td>9.1</td>
          <td>220000</td>
          <td>Horror</td>
          <td className='delete'><button>Delete</button></td>
        </tr>
        <tr className='row-1'>
          <td className='data-1'> <img src='https://thesunflower.com/wp-content/uploads/2024/01/s-l1200.jpg' className='image1'/><p>Wonka</p></td>
          <td>8.9</td>
          <td>190000</td>
          <td>Musical-Fantasy</td>
          <td className='delete'><button>Delete</button></td>
        </tr>
        
        
      </tbody>
    </table>
    
    </div>



    
    </>
  )
}

export default Watchlist