import React from 'react'
import styled from 'styled-components'

const Hero = (props) => {
   
  return (
    <HeroBox>
      <h1>{props.title}</h1>
    </HeroBox>
  )
}

export default Hero

const HeroBox = styled.div`
  min-height:50vh;
  background-color:rgba(0,0,0,.6);
  position:relative;
  margin-top:-60px;
  display:flex;
  justify-content:center;
  align-items:center;
`