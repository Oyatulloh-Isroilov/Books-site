import '../styles/index.css'
import logo from '../assets/images/logo.svg'
import heroImg from '../assets/images/hero.png'
import { Link } from 'react-router-dom'
function Signin() {
    return (
        <>
            <div className="signin">
                <div className="signHeader">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="accountMenu">
                        <Link className='signinBtnReg' to='/signin'>Sign in</Link>
                        <Link className='registerBtnreg' to='/register'>Register</Link>
                    </div>
                </div>
                <div className="signHero">
                    <div className="heroImg">
                        <img src={heroImg} alt="hero img" />
                    </div>
                    <div className="heroAccountBar">
                        <h1>Welcome Back</h1>
                        <h1></h1>
                        <h1>ARDOX</h1>
                        <input className='inputs emailInp' type="email" placeholder='Enter a gmail' />
                        <input className='inputs passwordInp' type="password" placeholder='Enter a password' />
                        <button>Sign In</button>
                        <p>Don't Have An Account? <b>Create Account !</b></p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Signin;