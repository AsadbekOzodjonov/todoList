import React, { useState } from "react";
import obj from "../object";
import styled from "styled-components";
function Todo() {
  return (
    <div>
      {obj.map((e) => {
        return (
          <div>
            <Card>
              <div>
                <CardDiv>
                  <div>
                    <CardImg src={e.img} alt="user1" />
                  </div>
                  <div>
                    <CardText>
                      <CardH4>{e.name}</CardH4>
                      <CardP>{e.date}</CardP>
                    </CardText>
                    <Carddesc>{e.desction}</Carddesc>
                  </div>
                </CardDiv>
                <CardTextBtn>
                  <CardExpiration>{e.expiration}</CardExpiration>
                  <CardBtn>{e.button}</CardBtn>
                </CardTextBtn>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
 
const Card = styled.div`
  box-sizing: border-box;
  width: 450px;
  height: 179px;
  background: #ffffff;
  border: 0.3px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 25px;
  padding: 15px 15px 15px 15px;
  margin-bottom: 30px;
`;
const CardImg = styled.img`
  border-radius: 50px;
  outline: 3px solid #77c5db;
  margin-right: 30px;
`;
const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CardText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: -65px;
`;
const CardTextBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CardH4 = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 15px;
`;
const CardP = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  padding-top: 5px;
  font-size: 14px;
  margin-left: 5px;
  color: #7d859a;
`;
const Carddesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #555555;
`;
const CardExpiration = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  padding-top: 10px;
  line-height: 15px;
  color: #343c44;
`;
const CardBtn = styled.button`
  width: 85px;
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 18px;
  text-align: center;
  color: #10f126;
  flex-direction: row;
  align-items: center;
  background: rgba(16, 241, 38, 0.2);
  border-radius: 8.5px;
  border: 1px solid rgba(16, 241, 38, 0.2);
`;
 
