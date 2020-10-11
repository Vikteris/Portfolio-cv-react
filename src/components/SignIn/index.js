import React from 'react'
import { 
    FormButton,
    Icon,
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text
} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Portfolio</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>SIGN TO ACCOUNT</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>    
                    </FormContent>    
                </FormWrap>         
            </Container>   
        </>
    )
};

export default SignIn;
