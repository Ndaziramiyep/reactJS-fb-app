import React, { useState } from 'react'
import Sidebar from "../sidebar/Sidebar"
import "./rightbar.css"
export default function Rightbar(){
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [count,setCount]=useState(0);
      function clickCounter(){
        count++; -m 
        setCount(count);
        console.log(count);
      }
    const displayValues=(e)=>{
         e.preventDefault();
       const demo=document.getElementById("demo");
       if(name.length > 0){
        demo.innerHTML=`Hello ${name}, your Email is: ${email}.`;
        }
        else{
        demo.innerHTML=`invalid input!`;
        }
      }

    return(
      <>
        <div className="rightbar">
           <div className="messangers share">
                <p>Patrick</p>
           </div>
         <Sidebar/>  
             <form action='' onSubmit={displayValues}>
         <label>Name:</label>   <input type="text" onChange={(e)=>{setName(name=e.target.value)}} /><br/>
         <label>Email:</label>   <input type="text" onChange={(e)=>{setEmail(email=e.target.value)}} /><br/>
            <button type='submit'>Submit</button>
            </form> 
            <button onClick={clickCounter}>counter {count}</button>
            <h1 id='demo'></h1>
        </div>
        </>

    )
}
