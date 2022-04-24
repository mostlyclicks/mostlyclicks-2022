import React from 'react'
import styled from 'styled-components'

const Team = (props) => {
  return (
    <TeamBox>
      <h2>{props.title}</h2>
      {props.children}
    </TeamBox>
  )
}

export default Team

const TeamBox = styled.div`
  background-color:lightgray;
  min-height:20vh;
`