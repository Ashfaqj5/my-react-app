import React from 'react'
import { useState,useEffect } from 'react'
import Post from  './Post';
import './App.css'
import { CURRENCY } from './currency';
export default function Users() {
    
    const [users,setUsers]=useState([]);
    const [country,setCountry]=useState('');
    useEffect(()=>{
       function fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>  res.json())
        .then((data)=>{
            setUsers(data);
            console.log(data);
            
        }).catch(err=>{
            console.log(err);
        })}

        fetchUsers();
    },[]);
    const result=[];
    const keys=Object.keys(CURRENCY)
    console.log(keys);
    for(var i in CURRENCY){
        result.push([i,CURRENCY[i]]);
    }
    // const curr=JSON.stringify(CURRENCY);
    // const ar=curr.map(each=> <p key={each}>{each}</p>)
    // console.log(result);
    const handleSelect=(e)=>{
        setCountry(e.target.value);
        console.log(e.target.value);
    }
    return (
    <div>{users && users.map(user=>{
        
        return <div key={user.id}><h2>{user.name}</h2> <Post userId={user.id}/></div>
    }
    )}
        <select value={country} onChange={handleSelect}>
        {result&& result.map(each=><option key={each[0]} value={each[1].name}>{each[1].name}</option>)}
        </select>
    </div>
  )
}
