import React from "react";
import { CURRENCY } from "../currency";
import {useRef} from 'react';

function Expence(){
    const [value, setValue] = React.useState(CURRENCY);

    const nameRef=useRef(null);
    const groupRef=useRef(null);
    const amountRef=useRef(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit=()=>{
        alert('submit'+nameRef.current.value+' group '+groupRef.current.value);
        
        

  }
  
    return(
        <div>
            <h2> Currencies</h2>
            <p>Select your base currency</p>
            <select value={value} onChange={handleChange}>
                
                <option value={CURRENCY['INR'].name}>{CURRENCY['INR'].name}</option>
                <option value={CURRENCY['IDR'].name}>{CURRENCY['IDR'].name}</option>
                
            </select>
            <h2> Accounts </h2>
            <p>Create accounts that you would like to keep track</p>
            {/* <form onSubmit={handleSubmit}> */}
            <label>
                    Name 
                    <input type="text" required={true} name="name" ref={nameRef}/>
                    
                </label>
                <label>
                Group
                <select ref={groupRef}>
                
                    <option value="Cash">Cash</option>
                    <option value="Bank Account">Bank Account</option>
                    <option value="Deposit">Deposit</option>
                    <option value="Credit">Credit</option>
                    <option value="Asset">Asset</option>
                </select>
                </label>

                <input type="number" id="amount" name="amount" ref={amountRef} /> 
                <br/>
                <input type="checkbox" id="indianRupee" name="indianRupee" value="Indian Rupee" />Indian Rupee
                <br/>
                <input type="checkbox" id="ShowOnDash" name="ShowOnDash" value="Show On DashBoard" />Show On DashBoard
 
                
                {/* <input type="submit" value="Submit" /> */}
                <button onClick={handleSubmit}>save account</button>
                {/* </form> */}
        </div>
    )
}
export default Expence;