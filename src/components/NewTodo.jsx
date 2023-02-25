import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import inputTypeLogo from "../img/inputType.png";
function NewTodo() {
  const [image, setImage] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  const Togle = () => {
    let i = true;
    if (i) {
      return (
        <div>
          <div>
            <div>
              <img src={inputTypeLogo} alt="" />
              <InputType type="file" onChange={handleFileUpload} />
            </div>
          </div>
          <div>
            <Grag>
              Drag image <br /> <span>or browse to</span>
              <span style={{ color: "#FF69A5" }}> select file</span>
            </Grag>
          </div>
          <img src={image} alt="" />
        </div>
      );
    } else {
      i = false;
      return <img src={image} alt="" />;
    }
  };
  return (
    <div>
      <Header />
      <div>
        <HomeSection>
          <div>
            <H1Text>
              Create a new <span style={{ color: "#F3477A" }}>task</span>
            </H1Text>
          </div>
          <div>
            <Selects type="search" />
            <Buttons>Add New</Buttons>
          </div>
        </HomeSection>
        <InputImg>
          <ImgBorder>{Togle()}</ImgBorder>
        </InputImg>
      </div>
    </div>
  );
}

export default NewTodo;
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

const Selects = styled.input`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #2c2e301a;
  border-radius: 8px;
  width: 167px;
  height: 40px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  align-items: center;
  letter-spacing: 0.25px;
  color: #343c44;
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
const InputImg = styled.div`
  position: relative;
  text-align: center;
  margin-top: 130px;
  padding-top: 50px;
  box-sizing: border-box;
  width: 1320px;
  height: 250px;
  margin-left: 260px;
  background: #ffffff;
  border: 0.3px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;
const Grag = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.12em;
  color: #555555;
  margin-top: 10px;
`;
const ImgBorder = styled.div`
  box-sizing: border-box;
  width: 1200px;
  margin-left: 45px;
  height: 160px;
  border: 2px dashed #cdd6e0;
  border-radius: 6px;
  padding: 10px 10px 10px 10px;
`;
const InputType = styled.input`
  position: absolute;
  left: 47%;
  top: 85px;
  bottom: 0;
  border-radius: 50%;
  border: 1px solid white;
  background-color: white !important;
  width: 50px;
  height: 30px;
`;
