import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
//components
import Button from './Button';
//styles
import { Wrapper } from './Login.style';
//context
import { Context } from '../context';
const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();
    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                userName,
                password
            );
            console.log(sessionId);
            setUser({ sessionId: sessionId.session_id, userName });
            navigate('/');
        } catch (error) {
            setError(true);
        };
    };
    console.log(_user);
    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        if (name === 'userName') setUserName(value);
        if (name === 'password') setPassword(value);
    };
    return (
        <Wrapper>
            {error && <div className = "error">There was an error!</div>}
            <label>User Name</label>
            <input
                type = "text"
                value = {userName}
                name = "userName"
                onChange = {handleInput}
            />
            <input
                type = "password"
                value = {password}
                name = "password"
                onChange = {handleInput}
            />
            <Button text = "Login" callback = {handleSubmit} />
        </Wrapper>
    );
};
export default Login;
