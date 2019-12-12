import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [imageObj, setObj] = useState([]);
  
  useEffect(() => {
     axios
    .get('https://api.nasa.gov/planetary/apod?api_key=PXJFppzvJQCIAb14zE2m5ePqKsN9DVaofbuvi3fJ')
    .then(response => {
      console.log(response.data);
      setObj(response.data);
    })
    .catch(error => console.log(error))
  }, [imageObj])
 
  return (
    <div className="App">
      <div className="container">
        <img src={imageObj.url} alt={imageObj.title}></img>
        <div className="textContent">
          <h1 className="title">{imageObj.title}</h1>
          <h2>{imageObj.date}</h2>
          <p>{imageObj.explanation}</p>
        </div>
      </div>      
    </div>
  );
}

export default App;
