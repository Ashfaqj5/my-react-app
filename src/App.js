
import './App.css';
import './components/ExpenceTracker';
// import ExpenceTracker from './components/ExpenceTracker';
// import Hello from './components/Hello';
// import Parent from './components/Parent';
// import Form from './components/Form';
// import MenuComponent from './components/MenuComponent';
// import {DISHES} from './shared/dishes';
import {useState,useEffect } from 'react';
import DogImg from './components/DogImg';
const App = () => {
  const [dogsData, setDogsData] = useState([]);
  // const [loading, setLoading] = useState(true);
  
  // function fetchImages(){
  //   dogsData.map((name)=>{
  //     fetch(`https://dog.ceo/api/breed/${name}/images/random`)
  //     .then((res)=>res.json())
  //   .then((data)=>{
  //     setImageData([...imageData,data["message"]]);
  //     setLoading(false);
  //   })
  //   .catch((error)=>{
  //     // console.log(error);
  //   })
  //   });
  // }
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/list')
    .then((res)=>res.json())
    .then((data)=>{
        setDogsData(data.message);
        
        // setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);
  // console.log(dogsData);
  // const photos=(<DogImg urls={imageData} alt="DogImg"></DogImg>);

  // console.log(photos);
  return(
    dogsData!=null ? dogsData.map((d,i)=>{return <div id="js_gallery" key={i}>
    <DogImg data={d}></DogImg>
   </div>})
    :<p id="js_loading">Loading...</p>
  );
}

export default App;
