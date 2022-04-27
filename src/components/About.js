import React from 'react'
import styled from 'styled-components'
import BgImg from "../images/MC-Mountain-Transparent-green.png";

const About = (props) => {
  return (
    <AboutBox>
      <div>
        <h2 id="about">{props.title}</h2>
        {props.children}
      </div>
    </AboutBox>
  );
}

export default About

const AboutBox = styled.div`
  min-height: 40vh;
  background-color: #464c36;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 160%;
  @media (min-width: 768px) {
    background-size: contain;
  }

  display: flex;
  padding: 0 3rem;
  p {
    color: #d3e4c7;
  }
  div {
    align-self: center;
    h2,
    p {
      text-align: center;
    }
    p {
      font-size: 120%;
      line-height: 1.15em;
    }
    @media (min-width: 768px) {
      background-size: cover;
      width: 600px;
      margin: 0 auto;
      p {
        font-size: 150%;
      }
    }
  }
`;

