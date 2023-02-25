import React from "react";
import logo from "../img/logo (1).png";
import searchIcon from "../img/search-icon.png";
import vektor from "../img/Vector1.jpg";
import user from "../img/user.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HEader() {
  return (
    <div>
      <Header>
        <Logo>
          <Link to="/Home">
            <img src={logo} width="150px" alt="" />
          </Link>
          <SearchInput>
            <SearchIcon src={searchIcon} alt="" />
            <SearchInputs
              type="search"
              placeholder="Search for any training you want "
            />
          </SearchInput>
        </Logo>

        <UserIcon>
          <img src={vektor} width="20px" alt="" />
          <UserI src={user} width="40px" alt="" />
        </UserIcon>
      </Header>
    </div>
  );
}

export default HEader;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;
const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchIcon = styled.img`
  gap: 10px;
`;
const UserIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;
const SearchInputs = styled.input`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: black;
  border: none;
  outline: none;
  width: 350px;
  background: #333333;
  margin-left: 10px;
`;
const UserI = styled.img`
  border: 1px solid black;
  border-radius: 50px;
`;
