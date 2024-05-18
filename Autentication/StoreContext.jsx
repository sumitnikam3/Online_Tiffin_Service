import { useState } from "react"








const url="http://localhost:4000"
const [token,setToken]=useState("");
























useEffect(()=>{
    if(localStorage.getItem("token"))
        {
            setToken(localStorage.getItem("token"));
        }
})







url,
token,
setToken