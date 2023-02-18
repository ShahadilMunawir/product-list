import { useState } from "react";

function Login(){

    const [loginData, setLoginData] = useState({
        "username":"", "pass":""
    })

    function loginSubmit(e) {
        e.preventDefault()
        
        fetch("http://127.0.0.1:5000/adminlogin",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": loginData.username,
                "pass": loginData.pass
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        }

    function onclick(e){
        setLoginData(prev => (
            {...prev, [e.target.name]: e.target.value}
        ))
    }

    return(
        <>
        <section className="login">
            <div className="login-card">
                <form className="login-form" onSubmit={loginSubmit}>
                    <h1 className="login-head">LOGIN</h1>
                    <div className="label-input">
                        <label htmlFor="username" className="login-label">Username</label>
                        <input type="text" className="username" id="username" placeholder="Enter you Username" value={loginData.username} onChange={onclick} name="username" />
                    </div>
                    <div className="label-input">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" className="password" id="password" placeholder="Enter your Password" value={loginData.pass} onChange={onclick} name="pass"/>
                    </div>
                    <button className="login-btn">LOGIN</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Login;