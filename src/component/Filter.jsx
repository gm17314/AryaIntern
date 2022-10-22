import React from "react";
import styled from "styled-components";

const Filter = () => {
  const Head = styled.div`
    width: 100%;
    height: 8rem;
  `;
  const H3 = styled.h3`
    font-size: 2.4rem;
    font-weight: bold;
    width: 80%;
    margin: 1rem 14rem;
    font-family: "Montserrat", sans-serif;
  `;
  const Para1 = styled.p`
    font-size: 1.6rem;
    margin: 1rem 14rem;
    width: 75%;
    font-family: "Montserrat", sans-serif;
  `;
  const Filt = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    background: #f9f9f9;
    padding: 2rem;
    box-shadow: 0 1px 6px rgb(0 0 0 / 16%);
  `;
  const Select = styled.select`
    border: 2px solid #00a789;
    margin-right: 1rem;
    width: 31rem;
    height: 4.4rem;
    color: #000;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2;
    border-radius: 0.4rem;
    font-family: "Montserrat", sans-serif;
    &:focus{
      box-shadow: 0 0 .7rem .3rem lightblue;
    }
  `;
  const Button = styled.button`
    height: 4.4rem;
    font-size: 1.8rem;
    border: none;
    padding: .7rem 1.5rem;
    min-width: 12rem;
    border-radius: 4px;
    color: white;
    background: #00a789;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    &:focus{
    background: #d8e757;
    color: #555;
    }
  `

  return (
    <>
      <Head>
        <H3>Find Sellers</H3>
        <Para1>
          View sell requirements posted by users looking for immediate selling
        </Para1>
      </Head>
      <Filt>
        <Select class="form-control">
          <option value="">Select Commodity</option>
          <option value="Wheat">Wheat</option>
          <option value="Paddy">Paddy</option>
          <option value="Maize">Maize</option>
          <option value="Chicory">Chicory</option>
          <option value="Green gram">Green gram</option>
          <option value="Dhaincha">Dhaincha</option>
          <option value="Arecanut">Arecanut</option>
          <option value="Jaggery">Jaggery</option>
        </Select>
        <Select>
          <option value=""> Select State</option>
          <option value="39">Aasam</option>
          <option value="11">ANDAMAN &amp; NICOBAR ISLANDS</option>
          <option value="10">ANDHRA PRADESH</option>
          <option value="13">ARUNACHAL PRADESH</option>
          <option value="12">ASSAM</option>
          <option value="14">BIHAR</option>
          <option value="5">CHANDIGARH</option>
          <option value="17">CHATTISGARH</option>
          <option value="16">DADRA &amp; NAGAR HAVELI</option>
          <option value="15">DAMAN &amp; DIU</option>
          <option value="1">DELHI</option>
        </Select>
        <Select id="city_dropdown" class="form-control">
          <option value="">Select City</option>
        </Select>
        <Button>Search</Button>
      </Filt>
    </>
  );
};

export default Filter;
