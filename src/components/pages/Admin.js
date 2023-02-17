import { useState } from "react";

function Admin(){

    const [loginData, setLoginData] = useState({
        "username":"", "password":""
    })

    function loginSubmit(e){
        e.preventDefault()
        
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
                        <input type="password" className="password" id="password" placeholder="Enter your Password" value={loginData.password} onChange={onclick} name="password"/>
                    </div>
                    <button className="login-btn">LOGIN</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Admin;