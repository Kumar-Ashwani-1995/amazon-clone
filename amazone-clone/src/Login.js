import { Link } from 'react-router-dom'
import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    // const [signingIn,setSigningIn] = useState("");
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
                
            })
            .catch(error => setError(error.message.split("Firebase:")[1]))
        setEmail("");
        setPassword("");
        
    };
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch(error => setError(error.message))

    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__image" src="https://pluspng.com/img-png/amazon-alexa-logo-vector-png-amazon-logo-3030.png" alt="Amazon Logo" ></img>
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <small className="login__error">{error}</small>
                {/* <small className="login__in">{signingIn}</small> */}
                <form onSubmit={signIn}>
                    <h5>E-mail</h5>
                    <input value={email} name="email" id="email" type="text" onChange={(e) => { setEmail(e.target.value) }}></input>
                    <h5>Password</h5>
                    <input value={password} id="password" name="password" type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                    <button className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create a AmaZon account</button>
            </div>
        </div >
    )
}

export default Login
