import React, { useEffect } from 'react'
import Moviecard from './Moviecard'
import Moviefooter from './Moviefooter'
import axios from 'axios'

function Movies() {

    useEffect(() => {
        axios.get(`https://omdbapi.com/?i=tt3896198&apikey=35f22369 `).then(function(res){
            console.log(res)
        })
    }, [])


  return (
    <>

    <div className='main-slider'></div>

    <div className='trending'>Trending Movies</div>

    <div className="movie-cards">
        <Moviecard image = 'https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg'/>
        <Moviecard image = 'https://m.media-amazon.com/images/I/61ln1IWAiwL.jpg'/>
        <Moviecard image = 'https://thesunflower.com/wp-content/uploads/2024/01/s-l1200.jpg'/>
        <Moviecard image = 'https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_FMjpg_UX1000_.jpg'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_anKCCP3b71evoxYXGuOfojP1KaOf6wiMcw&s'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimnBcudUYHnU-ivCMvmdfvqlPkSazZLlnFA&s'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbrYLOcMe1Tk-y-bHPC6D0I2LRwfF8Rf03w&s'/>        
    </div>
    <div className="movie-cards">
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2fXTE3YwbOnqTdXKQ_S1pk5g2XAi3u6-1g&s'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkFw8jv29RvWfSuZqZUcYDIFWOkPjfbuAKA&s'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73Ke5-maZBKYanRT8Nty5ypINF1OvAtlVqQ&s'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEjKnjKRmFYfn-FNXAgrLET5Yh3BoyJTIBA&s'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBkTcKMFNMsLbf1N6I_KNAPPLBRg3pkOhAA&s'/>
        <Moviecard image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWz8y3o-hcWpJtNdkn-xQLNNgM6uPfCmlslw&s'/>
        <Moviecard image = 'https://e0.pxfuel.com/wallpapers/223/572/desktop-wallpaper-joker-2019-movie-posters-4-of-6-joker-movie-poster.jpg'/>        
    </div>

    <Moviefooter/>

    
    </>
  )
}

export default Movies

//https://omdbapi.com/?i=tt3896198&apikey=35f22369  https://api.themoviedb.org/3/movie/popular?api_key=f1abfd77dd4b2f4f92e3214ebe9be3a2&language=en-US&page=2