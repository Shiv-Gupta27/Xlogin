import React from "react";
import { useState } from "react";

export default function Login(){
    const [userNM, setUserNM] = useState(null);
    const [passWD, setPassWD] = useState("");
    const [submited,setSubmited] = useState(false);
    const [invalid, setInvalid] = useState(false);


  const handleSubmit = (e)=>{
    e.preventDefault()
    if (userNM === "user" && passWD === "password"){
      setSubmited(true)
      setInvalid(false)
    }else{
      setSubmited(false)
      setInvalid(true)
    }
  }



  return(
    <div>
      <h1>Login Page</h1>
      {submited?<div>
        <p>Welcome, user!</p>
      </div>:<div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            {invalid?<p>Invalid username or password</p>:<></>}
            <label for= "username">Username: </label>
            <input type="text" value={userNM} onChange={(e)=>setUserNM(e.target.value)} name="username" placeholder="username" required></input><br/>
            <label for = "password">Password: </label>
            <input type="text" value={passWD} placeholder="password" onChange={(e)=>setPassWD(e.target.value)} name="password" required></input><br/>
            <button type="submit">Submit</button>
        </form>
        </div>}
      
    </div>
  )
}