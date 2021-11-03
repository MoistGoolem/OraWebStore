import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email"> Email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter email"
                        onChange={ (e) => setEmail(e.target.value) }
                    ></input>
                </div>
                <div>
                    <label htmlFor="password"> Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter password"
                        onChange={ (e) => setPassword(e.target.value) }
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer? <Link to="/register">Create an account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}