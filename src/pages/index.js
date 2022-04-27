import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Logo from '../images/mostlyClicks-logo-white.png'
import Footer from '../components/Footer'




const Index = () => {
  return (
    <Layout>
      <StyledHeader>
        <brand>
          <img src={Logo} alt="mostlyClicks, llc Logo" />
        </brand>
      </StyledHeader>
      <StyledMain>
        <Hero title="Web, SEO, Email Marketing | Park City, UT" />

        <About title="WE MOVE MOUNTAINS">
          <p>
            Actually, we can't &mdash; but we can do custom website
            design/development, technical and on-page search engine
            optimization, Shopify e-commerce and email marketing for
            small/medium businesses.
          </p>
        </About>

        <Services title="Services">
          <p>
            No BS. Practical web and digital marketing services designed and
            crafted to lift your brand.
          </p>
        </Services>
        {/* 
        <Team title="Our Team">
          <p>Intro paragraph about the mostlyClicks Team</p>
        </Team>
        
        <Contact title="Contact us">
          <p>Have a project in mind? Contact us.</p>
        </Contact>
      */}
      </StyledMain>
      <Footer />
    </Layout>
  );
}

export default Index

//Styles
const StyledHeader = styled.header`
  min-height: 100px;
  display:flex;
  align-items:center;
  position:relative;
  z-index:10;
  img {
    height:55px;
  }
  
`;

const StyledMain = styled.main`
  flex: 100%;
  background-color: rgba(0, 0, 0, 0.08);
`;
