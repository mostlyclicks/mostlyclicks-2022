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
        <a href="mailto:carlos@mostlylicks.com">carlos@mostlyclicks.com</a>
      </div>
    </StyledFooter>
  );
}

export default Footer

const StyledFooter = styled.footer`
  min-height: 100px;
  background-color: #2b3441;
  color: lightgray;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem 3rem;
  justify-content: space-between;
  a {
    color:rgba(255,255,255,.4);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align:left;
    div:nth-child(2) {
      order: 2;
    }
  }
`;