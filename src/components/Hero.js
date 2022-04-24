import React from 'react'
import styled from 'styled-components'
import BgImage from '../images/mostlyClicks_Aspens_ParkCity_UT_IMG_0590.jpg'

const Hero = (props) => {
   
  return (
    <HeroBox>
      <h1>{props.title}</h1>
    </HeroBox>
  )
}

export default Hero

const HeroBox = styled.div`
  min-height:70vh;
  background-color:lightblue;
  background-image:url(${BgImage});
  background-size:cover;
  position:relative;
  margin-top:-80px;
  display:flex;
  justify-content:center;
  align-items:center;
  h1 {
    color:white;
    text-shadow:0 0 40px rgba(0,0,0,.5);
  }
`