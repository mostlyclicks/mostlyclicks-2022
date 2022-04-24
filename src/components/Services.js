import React from 'react'
import styled from 'styled-components'

const Services = (props) => {
  return (
    <ServiceBox>
      <h2>{props.title}</h2>
      {props.children}
      <p>Serivce components go here</p>
    </ServiceBox>
  )
}

export default Services

const ServiceBox = styled.div`
  background-color: lightblue;
  min-height: 20vh;
`;

