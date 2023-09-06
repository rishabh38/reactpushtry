import React,{useState} from 'react';
import axios from 'axios';
function Signup(){
    const[username,setusername]=useState("");
    const handleSignup=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000./signup",{username})
            alert("user signal successfully")
            setusername("");
        }
        catch(err){
            console.log(err);
            alert("error");
        }
    };
    return(<div>
        <form on onSubmit={handleSignup}>
            <input type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
            <button type='submit'>Signup</button>
        </form>
    </div>);
}
export default Signup