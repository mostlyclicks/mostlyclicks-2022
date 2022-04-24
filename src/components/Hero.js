import React from 'react'
import styled from 'styled-components'
import BgImage from '../images/mostlyClicks_Aspens_ParkCity_UT_IMG_0590.jpg'

const Hero = (props) => {
   
  return (
    <HeroBox>
      <div>
        <h1>{props.title}</h1>
      </div>
    </HeroBox>
  );
}

export default Hero

const HeroBox = styled.div`
  min-height:70vh;
  background-color:lightblue;
  background-image:url(${BgImage});
  background-size:cover;
  background-position:center;
  position:relative;
  margin-top:-80px;
  display:flex;
  justify-content:center;
  align-items:center;
  h1 {
    color:white;
    text-shadow:0 0 40px rgba(0,0,0,.5);
    text-align:center;
  }
  div {
    @media (min-width: 768px) {
      h1 {font-size:255%;}
    }
  }


`