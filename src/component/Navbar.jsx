import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImLoop } from "react-icons/im";
const Navbar = () => {
  const Nav = styled.div`
    padding: 0 1%;
    width: 100%;
    height: 8rem;
    box-shadow: 0 0 .6rem rgba(0,0,0,.1)!important;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Logo = styled.a`
    width: 14%;
    height: 80%;
  `;
    const Img = styled.img`
    width: 100%;
    height: 100%;
    
  `;
  const NavMenu = styled.ul`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  `;
  const Li = styled.li`
    position: relative;
    a {
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      color: grey;
      letter-spacing: .1rem;
    }
  `;
  const Span = styled.span`
    font-size: 3rem;
    position: absolute;
    right: -2.2rem;
    top: -0.6rem;
    color: grey;
  `;
  const Button = styled.button`
    background-color: #606d41;
    border-radius: 4px;
    color: #fff;
    padding: 0.6rem;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    border-style: none;
  `;
 

  return (
    <Nav>
      <Logo href=""><Img  src="https://img.arya.ag//home/arya-logo.webp"/></Logo>
      <NavMenu>
        <Li>
          <a href="">Warehouse </a>
          <Span>
            <RiArrowDropDownLine />
          </Span>
        </Li>
        <Li>
          <a href="">Finance </a>
          <Span>
            <RiArrowDropDownLine />
          </Span>
        </Li>
        <Li>
          <a href="">Marketplace </a>
          <Span>
            <RiArrowDropDownLine />
          </Span>
        </Li>
        <Li>
          <a href="">Who We Serve </a>
          <Span>
            <RiArrowDropDownLine />
          </Span>
        </Li>
        <Li>
          <a href="">Services </a>
          <Span>
            <RiArrowDropDownLine />
          </Span>
        </Li>
        <Li  style={{top:"-.8rem"}}>
          <a href=""><Span>
            <ImLoop />
          </Span></a>
          
        </Li>
        <Button>Login/Signup</Button>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
