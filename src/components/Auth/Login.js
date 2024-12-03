import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        // validate


        // submit
        let data = await postLogin(email, password);
        console.log('>>> check res: ', data);
        if(data && data.EC === 0){
            toast.success(data.EM);
            navigate('/');
        }

        if(data && +data.EC !== 0){
            toast.error(data.EM);
        }
    }


    return (
        <div className='login-container'>
            <div className='header'>
                Don't have an account yet?
                <button onClick={() => navigate('/register')}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                HoiDanIT
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={'email'} className='form-control'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={'password'} className='form-control'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <span>Forgot password ?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                    >Login</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => {navigate('/')}}> &#60;&#60; Go to HomePage</span>
                </div>
            </div>
        </div>
    )
}

export default Login;