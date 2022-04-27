import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  return (
    <StyledCard>
      <h3>{props.title}</h3>
      { props.children }
    </StyledCard>
  );
}

export default Card

const StyledCard = styled.div`
  h3,p {
    padding:0;
    margin:0;
  }

  p {
    text-align:left;
    line-height:1.55em;
    margin-top:1rem;
  }
  
  
  @media (min-width:768px) {
    
    
    
  }
 
  

  
`

