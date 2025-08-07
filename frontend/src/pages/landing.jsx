import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
export default function LandingPage() {
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>StreamMeet</h2>
                </div>
                <div className='navlist'>
                    <p>Join As Guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>login</p>
                    </div>
                </div>
            </nav>


            <div className='landingMainContainer'>
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved ones</h1>
                    <p>Cover a distance by StreamMeet</p>
                <div role="button">
                    <Link to={"./auth"}>Get Started</Link>
                </div>
                </div>

                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>

        </div>

    )
}

