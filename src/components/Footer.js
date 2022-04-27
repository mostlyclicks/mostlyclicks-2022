import React from 'react'
import styled from 'styled-components'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <div>&copy;{` ${year} - mostlyClicks, LLC`}</div>
      <div>
        mostlyClicks, LLC
        <br />
        6421 Snowview Drive
        <br />
        Park City, UT 84096
        <br />
        <br />
        (608) 385-1115
      </div>
    </StyledFooter>
  );
}

export default Footer

const StyledFooter = styled.footer`
  min-height: 100px;
  background-color: #2b3441;
  color:lightgray;
  display:flex;
  padding:2rem 3rem;
  justify-content:space-between;
`;