import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'



const Index = () => {
  return (
    <Layout>
      <StyledHeader>
        <h2>mostlyClicks, Inc</h2>
      </StyledHeader>
      <StyledMain>
        <Hero title="Web, SEO, Email Marketing | Park City, UT" />

        <About title="About">
          <p>
            Custom website design/development, technical and on-page search
            engine optimization, Shopify e-commerce and email marketing for small &mdash;
            medium businesses.
          </p>
        </About>

        <Services title="Services">
          <p>Services intro paragraph — put cards inside service component</p>
        </Services>

        <Team title="Our Team">
          <p>Intro paragraph about the mostlyClicks Team</p>
        </Team>
        
        <Contact title="Contact us">
          <p>Have a project in mind? Contact us.</p>
        </Contact>


      </StyledMain>
      <StyledFooter>
        <p>This is the footer</p>
      </StyledFooter>
    </Layout>
  );
}

export default Index

//Styles
const StyledHeader = styled.header`
  min-height: 60px;
  background-color:rgba(0,0,0,.33);
`;

const StyledMain = styled.main`
  flex: 100%;
  background-color: rgba(0, 0, 0, 0.08);
`;

const StyledFooter = styled.footer`
  min-height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
`;