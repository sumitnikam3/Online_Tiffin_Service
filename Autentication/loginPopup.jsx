

import {assets} from '../../assets/assets'
import {StoreContext} from '../../context/StoreContext'
import axios from "axios"

const {url,setToken} = useContext(StoreContext)

const[data,setData]=useState({
    name:"",
    email:"",
    password:""
})

const onChageHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;   
    setData(data=>({...data,[name]:value}))
}



const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl=url;
    if(currState==="Login"){
        newUrl +="/api/user/login"
    }
    else{
        newUrl +="/api/user/register"
    }

    
    const response =await axios.post(newUrl,data);

    if(response.data.success) {
        setToken(response.dats.token);
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
    }
    else{
        alert(response.data.message)
    }
}





<>

<form OnSubmit={onLogin}></form>




<input name='name' onChange={onChageHandler} value={data.name}></input>

<input name='email' onChange={onChageHandler} value={data.email}></input>
<input name='password' onChange={onChageHandler} value={data.password}></input>

<button type='submit'></button>
</>

// npm install axios