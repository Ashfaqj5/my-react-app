import React from "react";
import Expence from "./Expence";
import TransactionHistory from "./TransactionHistory";
function ExpenceTracker(){
    
    return (
        <div>
            <h1>Money Tracker Setup</h1>
            <hr/>
            <Expence></Expence>
            <TransactionHistory></TransactionHistory>
        </div>
    )
}
export default ExpenceTracker;

