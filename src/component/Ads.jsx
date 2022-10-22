import React from "react";
import styled from "styled-components";

const Ads = () => {
  const Wrap = styled.div``;
  const H4 = styled.h4`
    font-size: 1.8rem;
    margin: auto;
    padding: 1rem;
    letter-spacing: 1px;
    color: grey;
    width: 80%;
    text-align: end;
    font-family: "Montserrat", sans-serif;
  `;
  const Span = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
    color: black;
  `;
  const Advertise = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Box = styled.div`
    width: 80%;
    height: 23rem;
    border: 2px solid #00a789;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  `;
  const Triangle = styled.div`
    width: 15%;
    background-image: linear-gradient(to bottom right, #219653,white,white);
  `;
  const Detail = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const Image = styled.img`
    width: 25%;
    height: 100%;
  `;
  const H3 = styled.h3`
    width: 100%;
    font-size: 3rem;
    font-weight: 500;
  `;
  const Para = styled.p`
    width: 100%;
    color: grey;
    font-size: 2.8rem;
  `;
  const Button = styled.button`
    font-size: 2.2rem;
    font-weight: 600;
    background: #fbb900;
    border-radius:5px;
    font-family: "Montserrat", sans-serif;
    border: none;
    padding: .7rem 0;
    margin-top:1rem;
    width: 55%;
  `;
  return (
    <Wrap>
      <H4>
        Total Requirements : <Span>1140</Span>
      </H4>
      <Advertise>
        <Box>
          <Triangle></Triangle>
          <Detail>
            <H3>Hi, looking for verified sellers?</H3>
            <Para>
              Post your trade requirement and get best prices from verified
              sellers
            </Para>
            <Button>Post Trade Requirement</Button>
          </Detail>
          <Image src="https://www.arya.ag/static/media/buy_sell_banner_desktop.37854e6d.png"></Image>
        </Box>
      </Advertise>
    </Wrap>
  );
};

export default Ads;
