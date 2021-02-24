import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const SignIn = () => {

    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    };

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        axios({
            method: 'POST', 
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/login",
        }).then((res) => console.log(res));
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/' onClick={handleClick}>Guroom</Icon>
                    <FormContent>
                        <Form action="">
                            <FormH1>Sign in to your account</FormH1>
                                <FormLabel htmlFor='for'>Username</FormLabel>
                                <FormInput type="text" onChange={e => setLoginUsername(e.target.value)} required />
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type="password" onChange={e => setLoginPassword(e.target.value)} required /> 
                                <FormButton type="submit" onClick={login}>Log In</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn

