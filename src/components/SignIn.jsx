import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import google from "../img/logo_googleg_48dp.png";
import facebook from "../img/Group.png";
import apple from "../img/Vector (1).png";
import "../App.css";
import { Outlet, Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <img className="right" src={logo} alt="asdasd" />
      <DIV>
        <div>
          <Sign>Sign in</Sign>
        </div>
        <div>
          <div>
            <Buttons>
              <Google src={google} alt="google" />
              Continue with Google
            </Buttons>
          </div>
          <div>
            <ButtonsOne>
              <Facebook src={facebook} alt="Facebook" />
              Continue with Facebook
            </ButtonsOne>
          </div>
          <div>
            <ButtonsTwo>
              <Apple src={apple} alt="Apple" />
              Continue with Apple
            </ButtonsTwo>
          </div>
        </div>
        <div>
          <p className="lineText">OR</p>
        </div>
        <div>
          <AuthDivs>
            <div>
              <EmailParag>Email address:</EmailParag>
              <EmailInput
                type="email"
                required
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <PasswordParag>Password:</PasswordParag>
              <PasswordInput
                type="text"
                required
                placeholder="Enter your password"
              />
            </div>
            <Link to="/Home">
              <SingInBtn type="submit">Sign in</SingInBtn>  
            </Link>
            <ForgotPass>Forgot your password?</ForgotPass>
            <LineSign></LineSign>
          </AuthDivs>
        </div>
        <div>
          <SignUp>Don't have an account? Sign up</SignUp>
          <TodoSupp>Todoist Support</TodoSupp>
        </div>
      </DIV>
    </div>
  );
}

export default SignIn;
const DIV = styled.div`
  margin-left: 35%;
  text-align: center;
  width: 540px;
  height: 751px;
  background: #ffffff;
  box-shadow: 10px 10px 100px -33px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
const Sign = styled.h1`
  padding: 30px 30px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: #343c44;
`;
const Buttons = styled.button`
  box-sizing: border-box;
  width: 490px;
  height: 43px;
  border: 1px solid #75838e;
  border-radius: 4px;
  background-color: #ffff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: black;
  cursor: pointer;
  margin-bottom: 15px;
`;
const Google = styled.img`
  padding-right: 11px;
  height: 18px;
`;
const ButtonsOne = styled.button`
  box-sizing: border-box;
  width: 490px;
  height: 43px;
  border: 1px solid #75838e;
  border-radius: 4px;
  background-color: #ffff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: black;
  cursor: pointer;
  margin-bottom: 15px;
`;
const ButtonsTwo = styled.button`
  box-sizing: border-box;
  width: 490px;
  height: 43px;
  border: 1px solid #75838e;
  border-radius: 4px;
  background-color: #ffff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: black;
  cursor: pointer;
`;
const Facebook = styled.img`
  padding-right: 11px;

  height: 18px;
`;
const Apple = styled.img`
  padding-right: 11px;
  height: 18px;
`;
const AuthDivs = styled.div`
  text-align: left;
  margin-left: 27px;
`;
const EmailParag = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: black;
  margin-bottom: 2px;
`;
const EmailInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #24272c;
  border-radius: 4px;
  width: 490px;
  height: 43px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: black;
  padding-left: 10px;
  margin-bottom: 10px;
`;
const PasswordParag = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: black;
  margin-bottom: 2px;
`;
const PasswordInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #24272c;
  border-radius: 4px;
  width: 490px;
  height: 43px;
  top: calc(50% - 20px / 2);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: black;
  padding-left: 10px;
  margin-bottom: 20px;
`;
const SingInBtn = styled.button`
  background: #884cb2;
  border-radius: 4px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  width: 490px;
  height: 43px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  border: 1px solid #884cb2;
  cursor: pointer;
`;
const ForgotPass = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 30px;
`;
const LineSign = styled.p`
  width: 490px;
  height: 0px;
  border: 1px solid #75838e;
  margin-bottom: 25px;
`;
const SignUp = styled.h1`
  height: 21px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`;
const TodoSupp = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #75838e;
`;
