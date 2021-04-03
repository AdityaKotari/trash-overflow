
import React,{useState,useContext,} from 'react'
import {Link,NavLink,useHistory} from 'react-router-dom'
import {UserContext} from '../../../App'
import M from 'materialize-css'
const LogIn = () =>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const uploadFields = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Please enter a valid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/profile/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               console.log("jwt token", data.token)
               console.log("User data", data.user); 
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"Welcome!",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
    <main>
        <center>
        <div className="section"></div>

        <h5 className="indigo-text">Please, login into your account</h5>
        <div className="section"></div>

        <div className="container">
            <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>

            <form className="col s12" onSubmit={(e)=>{e.preventDefault()}}>

                <div className='row'>
                <div className='input-field col s12'>
                    <input className='validate' type='email'  value={email}
            onChange={(e)=>setEmail(e.target.value)} />
                    <label for='email'>Email</label>
                </div>
                </div>

                <div className='row'>
                <div className='input-field col s12'>
                    <input className='validate' type='password' value={password}
            onChange={(e)=>setPasword(e.target.value)} />
                    <label for='password'>Password</label>
                </div>
                </div>

                <br />
                <center>
                <div className='row'>
                    <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'  onClick={()=>uploadFields()}>Login</button>
                </div>
                </center>
            </form>
            <p>New user? <NavLink to="/signup">Register</NavLink></p>
            <div className="section"></div>
            </div>
        </div>
        </center>

        <div className="section"></div>
        <div className="section"></div>
    </main>
    )
}

export default LogIn;