import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  return (
    <StyledCard>
      <h3>{props.title}</h3>
      {props.children}
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  p {
    text-align:left;
  }
`

