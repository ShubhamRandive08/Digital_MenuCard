import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

export default function Login() {
    const navigate = useNavigate();
    const [pwd, setPwd] = useState(0)
    const handlePwd = (e) => {
        setPwd(e.target.value);
    }

    // Credintials for the login the user
    function login() {
        const p = 12345;

        if (p == '') {
            alert("Please enter your password")
        } else {
            if (p == pwd) {
                alert('Login Success')
                navigate('/Home')
            } else {
                alert('Login Failed')
            }
        }
    }

    const backImage = {
        backgroutImage: `url('./assets/HotelIamge.jpg')`
    }

    return (
        <>
            <div className="heading">
                <h2>HOTEL SHIVARAY</h2>
            </div>

            <div className="containerMain">
                <div style={backImage} className="header">

                    <h3>ADMIN LOGIN</h3><br />
                    <form action="">
                        <input className="handlePwd" type="number" onChange={handlePwd} name="" id="" /><br />
                        <button className="LoginBut" type="submit" onClick={login}>LongIn</button>
                    </form>
                </div>
            </div>
        </>
    )
}