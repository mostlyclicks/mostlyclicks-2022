import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Services = (props) => {
  return (
    <ServiceBox>
      <div>
        <h2>{props.title}</h2>
        {props.children}
        <Card title="Web design/development">
          <p>Notice we lumped design and development together? Your brand/business deserves it's own design to best communicate your who you are and what you do. Custom development allows to make a site that works the way you work. Static, content-managed or even e-commerce. We put the right design and tools together to achieve your business goals.</p>
        </Card>
        <Card title="Search Engine Optimization">
          <p>SEO can be an ambiguous &mdash; and even scary phrase to some. Not to us. We use modern tools to analyze your site against your competitors for search terms/phrases that your customers use. Because we develop your site we give site a fighting chance to get on the first page. We offer site audits, reporting, one-time and on-going search optimization.</p>
        </Card>
        <Card title="Shopify E-commerce">
          <p>Got something to sell &mdash; Online? With Shopify you can certainly spin up your own store but it can be overwhelming when your just starting out. We can help you at any point in the process &mdash; from staring from scratch to improving an already operational store. Theme design/development to copy writing to product photography, we have the experience to boost your online store.</p>
        </Card>
        <Card title="Email Marketing">
          <p>Email marketing is still a powerful platform for engaging with your customers. mostlyClicks offers email strategy, design, development, copy writing and list management. A/B and conversion rate testing are an integral part of our process. This allows you to maximize your email communications and while increasing email engagement and conversion rates.</p>
        </Card>
      </div>
    </ServiceBox>
  );
}

export default Services

const ServiceBox = styled.div`
  display: flex;
  background-color: #c7cbd5;
  min-height: 20vh;
  padding: 4rem 3rem;
  justify-content: center;
  div {
    align-self: center;
    h2,
    p {
      text-align: center;
      color: #4c525e;
    }
  }
`;

