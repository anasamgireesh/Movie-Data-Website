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



