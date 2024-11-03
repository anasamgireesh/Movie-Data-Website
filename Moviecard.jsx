import React from "react";

function Moviecard( props) {
  return (
    <div className="moviecard">
      <img
        src= {props.image}
        className="movie-image"
      />
      

    </div>
  );
}

export default Moviecard;

//  background-image: url("https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg");

// .emoticon{
//   margin: 0.2rem;
//   height: 1.6rem;
//   width: 1.6rem;
//   background-color: #948b8b;
//   border-radius: 0.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .moviecard{
//   height: 20rem;
//   width: 10rem;
//   border-radius: 1rem;
//   background-color: aqua;
//   transition: ease-in-out 0.2s;
//   display: flex;
//   background-size: cover;
//   background-position: center;
//   color: white;
// }
