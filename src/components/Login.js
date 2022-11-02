import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <CTALogoOne src="/images/cta-logo-one.svg">
            </CTALogoOne>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                This is a clone webpage that for learning purposes, using Redux, React JS, Styled Components and Firebase.
                Antonio Sein Jagou - 2022
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png">

            </CTALogoTwo>
        </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
   

    &:before{
        background-position: top;
        background-size: cover;
        background-image: url("images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
    }
`

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
   
`

const CTALogoOne = styled.img`
`

const CTALogoTwo = styled.img`
    width:90%;
`

const SignUp = styled.a`

    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
