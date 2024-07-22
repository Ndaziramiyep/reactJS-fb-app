import React, { useState } from 'react'
import "./rightbar.css"
export default function Rightbar(){
    // var [name,setName]=useState("");
    // var [email,setEmail]=useState("");

    // const displayValues=(e)=>{
    //      e.preventDefault();
    //    const demo=document.getElementById("demo");
    //    if(name.length !==0 && name !=="" && email.length !==0 && email !=="" ){
    //     demo.innerHTML=`Hello ${name}, your Email is: ${email}.`;
    //     }
    //     demo.innerHTML=`invalid input!`
    //   }

    return(
        <div className="rightbar">
          Rightbar
            {/* <form action='' onSubmit={displayValues}>
         <label>Name:</label>   <input type="text" onChange={(e)=>{setName(name=e.target.value)}} />
         <label>Email:</label>   <input type="text" onChange={(e)=>{setEmail(email=e.target.value)}} />
            <button type='submit'>Submit</button>
            // </form> */}
            // <h1 id='demo'></h1>
        </div>
    )
}
