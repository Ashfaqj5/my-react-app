import React from 'react'
import { useState } from 'react';

export default function DogImg({data}) {
  
  const [imageData, setImageData] = useState([]);
  const [show,setShow]=useState(true);
  function fetchImages(){
      
        fetch(`https://dog.ceo/api/breed/${data}/images/random`)
        .then((res)=>res.json())
      .then((data)=>{
        console.log(`data is ${data.message}`)
        setImageData(data.message);
        
      })
      .catch((error)=>{
        console.log(error);
      })
     

    }
    
  
  const handleClick=()=>{
    
    fetchImages();
    setShow(false);
    console.log(imageData);
  }
    // console.log("props  ",props.urls);
  return (
    
    <div>{show && <p onClick={handleClick}>load images</p>}{<div>{imageData?imageData.map((url,i)=>(<img key={i} src={url} alt="altDog" height="100px" width="100px"/>)):<p>wait loading</p>}</div> }
    </div>
     )
}
