import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'
import heroImg from '../assets/images/hero.png'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleRegister = () => {
        localStorage.setItem('user', JSON.stringify({ email, password }));
    };

    return (
        <>
            <div className="register">
                <div className="regHeader">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="accountMenu">
                        <Link className='signinBtn' to='/signin'>Sign in</Link>
                        <Link className='registerBtn' to='/register'>Register</Link>
                    </div>
                </div>
                <div className="regHero">
                    <div className="heroImg">
                        <img src={heroImg} alt="hero img" />
                    </div>
                    <div className="heroAccountBar">
                        <h1>Hello !</h1>
                        <h1>Welcome to ARDOX</h1>
                        <input className='inputs emailInp' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter a gmail' />
                        <input className='inputs passwordInp' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter a password' />
                        <input className='inputs repeatPasswordInp' type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder='Repeat a password' />
                        <button onClick={handleRegister}>Sign In</button>
                        <p>Do you have account? <b>Sign in</b></p> {/* Link komponentiga to'g'ri yo'nalishni berin */}
                    </div>
                </div>
            </div >
        </>
    );
}

export default Register;
