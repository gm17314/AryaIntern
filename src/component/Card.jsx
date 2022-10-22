import React from "react";
import styled from "styled-components";
const Card = (props) => {
  const Card = styled.div`
    width: 98%;
    margin: 2rem;
    height: 24rem;
    border-radius: 5px;
    border: 1px solid #d6d6d6;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;
  const Image = styled.img`
    width: 30%;
    height: 80%;
    border-radius: 5px;
  `;
  const Detail = styled.div`
    width: 35%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `;
  const Div = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Id = styled.div`
    width: 30%;
    height: 70%;
    border-left: 1px solid #d6d6d6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Button1 = styled.button`
    font-size: 1.5rem;
    font-weight: 600;
    background: #8cc641;
    border-radius: 2rem;
    font-family: "Montserrat", sans-serif;
    border: none;
    padding: .4rem 1rem;
    `
const H3 = styled.h3`
    color: grey;
    width: 100%;
    font-size: 2.2rem;
    font-weight:500;
`
const Button2 = styled.button`
    color: white;
    background-color:#00a789;
    font-family: "Montserrat", sans-serif;
    border: none;
    border-radius: 3px;
    width: 80%;
    padding: 7px 0;
    font-size: 2rem;
    font-weight: bold;
`

  return (
    <Card>
      <Image src={props.img}></Image>
      <Detail>
        <Div>
          <span style={{ fontSize: "2.5rem", color: "black",fontWeight:"500"}}>
            {props.name}, 
            <span style={{ fontSize: "2.5rem", color: "grey" }}>
              {props.quality}
            </span>
          </span>
          <Button1>Sell</Button1>
        </Div>
        <H3>{props.location}</H3>
        <H3>Quantity: <span style={{ fontSize: "2.5rem", color: "black" }}>
            {props.quantity}MT</span></H3>
        <H3>Expected Price: Rs<span style={{ fontSize: "2.5rem", color: "black" }}>
            {props.price}/MT</span></H3>
        <H3>Payment Terms: <span style={{ fontSize: "2.5rem", color: "black" }}>
            {props.terms}</span></H3>
      </Detail>
      <Id>
      <H3 style={{margin:".5rem",width:"80%",fontWeight:"400"}}>{props.time} hours ago</H3>
      <H3 style={{margin:".5rem",width:"80%",fontWeight:"400"}}>ID: {props.id}</H3>
      <Button2>View Details</Button2>
      </Id>
    </Card>
  );
};

export default Card;
