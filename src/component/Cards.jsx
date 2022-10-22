import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { GrFormNextLink } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";
const Cards = () => {
  const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  `;
  const Container = styled.div`
    padding: 2rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #d6d6d6;
  `;

  const PageCount = styled.div`
    width: 40%;
    height: 5rem;
    margin-bottom: 2rem;
  `;
  const Ul = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;
  const Li = styled.li`
    a {
      font-size: 1.5rem;
      color: #fff;
      border: 1px solid #5c6b25;
      font-family: "Montserrat", sans-serif;
      padding: 0.9rem 1.4rem;
      color: black;
    }
  `;

  return (
    <Wrap>
      <Container>
        <Card img="https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" name="Wheat" quality="Good Quality" location="Kota, Rajasthan" quantity="225" price={`Rs22500`} terms="Ex Warehouse" id="76285345" time="16"/>

        <Card img="https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" name="Wheat" quality="Good Quality" location="Kota, Rajasthan" quantity="3000" price="26500" terms="Ex Warehouse" id="762853325" time="10"/>

        <PageCount>
          <Ul>
            <Li>
              <a style={{ fontSize: "1.7rem" }}>
                {" "}
                <IoIosArrowRoundBack />
              </a>
            </Li>
            <Li>
              <a style={{ backgroundColor: "#5c6b25", color: "white" }}>1</a>
            </Li>
            <Li>
              <a>2</a>
            </Li>
            <Li>
              <a>3</a>
            </Li>
            <Li>
              <a>4</a>
            </Li>
            <Li>
              <a>5</a>
            </Li>
            <Li>
              <a
                style={{
                  fontSize: "1.7rem",
                  backgroundColor: "#5c6b25",
                  color: "white",
                }}
              >
                <GrFormNextLink />
              </a>
            </Li>
          </Ul>
        </PageCount>
      </Container>
      ;
    </Wrap>
  );
};

export default Cards;
