import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';
import { useHistory } from 'react-router-dom';

const SignIn = () => {

    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/' onClick={handleClick}>Guroom</Icon>
                    <FormContent>
                        <Form action="">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required /> 
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
