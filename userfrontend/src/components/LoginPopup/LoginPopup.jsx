import { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign In");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState !== "Sign In" && <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button className='btn'>
                    {currState}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to terms and privacy policy.</p>
                </div>
                {
                    currState === "Sign In"
                        ? <p>Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                        : <p>Already Have an Account? <span onClick={() => setCurrState("Sign In")}>Login Here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;
