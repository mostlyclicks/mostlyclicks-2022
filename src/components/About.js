import React from 'react'
import styled from 'styled-components'

const About = (props) => {
  return (
    <AboutBox>
      <h2>{props.title}</h2>
      {props.children}
    </AboutBox>
  );
}

export default About

const AboutBox = styled.div`
  min-height:30vh;
  background-color:green;
`

