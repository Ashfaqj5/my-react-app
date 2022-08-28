import React from 'react'
import { useState } from 'react';

export default function Post({userId}) {
    
    const [posts,setPosts]=useState([]);
    const [show,setShow]=useState(true);
    const handleClick=()=>{
        
    
        function fetchPosts(){
            fetch('https://jsonplaceholder.typicode.com/posts/?userId='+userId)
                .then(res=> res.json())
                .then(data=>{   
                            console.log(`post of user id ${userId} `,data);
                            setPosts(data);
                           })
                .then((all)=>{
                                setShow(false)})
                .catch(err=>console.log(err))
           
            
        }
            fetchPosts();
            setShow(false);
    
    }
  return (
    <div>{show&&<h3 className="flex-container" onClick={handleClick}>show posts </h3>}{posts?posts.map(p=><p className="flex-container" key={p.id}>{p.title}</p>):<p>loading...</p>}</div>
  )
}
