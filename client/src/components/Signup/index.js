import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignupElements';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        axios({
            method: 'POST', 
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
    };

    return (
        <>
            <>
                <Container>
                    <FormWrap>
                        <Icon to='/' onClick={handleClick}>Guroom</Icon>
                        <FormContent>
                            <Form action="">
                                <FormH1>Register a New Account</FormH1>
                                    {/* <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type="email" required /> */}
                                    <FormLabel htmlFor='for'>Username</FormLabel>
                                    <FormInput type="text" onChange={e => setRegisterUsername(e.target.value)} required />
                                    <FormLabel htmlFor='for'>Password</FormLabel>
                                    <FormInput type="password" onChange={e => setRegisterPassword(e.target.value)} required /> 
                                    <FormButton type="submit" onClick={register}>Sign Up</FormButton>
                                <Text to="/signin">Already have an Account?</Text>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>   
        </>
    )
}

export default SignUp
