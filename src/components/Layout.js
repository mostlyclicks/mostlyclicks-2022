import React from 'react'
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
  }
  body {
    margin:0;
    padding:0;
    min-height:100%;
  
  }
  h1,h2,h3 p,div {
    margin:0;
    padding:0;
  }

  h2::before, h2::after {
    content: " — ";
    color:#d3e4c7;
  }
  h2#about {
    color:#d3e4c7;
  }


`;

const GlobalWrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({children}) => {
  return (
    <GlobalWrapper>
      <GlobalStyle />
      {children}
    </GlobalWrapper>
  )
}

export default Layout