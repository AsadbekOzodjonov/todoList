import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Todo from "./Todo";
import { Outlet, Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Header />
      <HomeSection>
        <div>
          <H1Text>
            You’ve got <span style={{ color: "#884CB2" }}>7 task</span> today
          </H1Text>
          <Ptext>Your task today</Ptext>
        </div>
        <div>
          <Selects>
            <option value="Your task today">Your task today</option>
            <option value="Your task yestedey">Your task yestedey</option>
          </Selects>
          <Link to="/NewTodo">
            <Buttons>Add New</Buttons>
          </Link>
        </div>
      </HomeSection>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default Home;
const HomeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
`;
const H1Text = styled.h1`
  height: 54px;
  top: calc(50% - 54px / 2 - 369px);
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
`;
const Ptext = styled.p`
  height: 27px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: rgba(255, 255, 255, 0.8);
`;
const Selects = styled.select`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(117, 131, 142, 0.1);
  border-radius: 8px;
  width: 200px;
  height: 40px;
`;
const Buttons = styled.button`
  width: 150px;
  height: 40px;
  background: #884cb2;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 9px;
  color: #ffffff;
  border: none;
  margin-left: 25px;
`;
