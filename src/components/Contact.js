import React from 'react'
import styled from 'styled-components'

const Contact = (props) => {
  return (
    <ContactBox>
      <h2>{props.title}</h2>
      {props.children}
      <p>Form goes here</p>
    </ContactBox>
  )
}

export default Contact

const ContactBox = styled.div`
background-color:salmon;
min-height:20vh;
`