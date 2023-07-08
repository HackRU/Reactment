import React from "react";


const MoviePage = () => {
    return (
      <div className="video-container">
        <h1>Movie Page</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/45TH-uZEY18"
          title="YouTube Video" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  };

  
export default MoviePage;