

  
import React,{useState,useEffect} from 'react';
import {Link,NavLink,useHistory} from 'react-router-dom';
import M from 'materialize-css';
// import './SignUp.css';

const SignUp = () => {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    const uploadFields = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/profile/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,
                phone
            })
        }).then(res=>res.json())
        .then(data=>{

            console.log(data);
           if(data.error){
               console.log(data.error); 
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/login')
           }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
    <main>
        <center>
        <div className="section"></div>

        <h5 className="indigo-text">Register</h5>
        <div className="section"></div>

        <div className="container">
            <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>

            <form className="col s12" onSubmit={(e)=>{e.preventDefault()}}>

                <div className='row'>
                <div class="input-field col s12">
                    <input id="name" type="text" class="validate" name="name" value={name}
            onChange={(e)=>setName(e.target.value)}/>
                    <label for="name">Full Name</label>
                </div>
                </div>

                <div className='row'>
                <div className='input-field col s12'>
                    <input className='validate' type='email' name='email' id='email' value={email}
            onChange={(e)=>setEmail(e.target.value)} />
                    <label for='email'>Email address</label>
                </div>
                </div>
                <div className='row'>
                <div class="input-field col s12">
                    <input id="phone" type="number" class="validate" name="phone" value={phone}
            onChange={(e)=>setPhone(e.target.value)}/>
                    <label for="phone">Contact number</label>
                </div>
                </div>

                <div className='row'>
                <div className='input-field col s12'>
                    <input className='validate' type='password' name='password' id='password'  value={password}
            onChange={(e)=>setPassword(e.target.value)} />
                    <label for='password'>Password</label>
                </div>
                </div>

                <br />
                <center>
                <div className='row'>
                    <button type='submit' className='col s12 btn btn-large waves-effect indigo'  onClick={()=>uploadFields()}>SIGNUP</button>
                </div>
                </center>
            </form>
            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
            <div className="gap"></div>
            </div>
        </div>
        </center>

        <div className="section"></div>
        <div className="section"></div>
    </main>       

    )
}

export default SignUp;