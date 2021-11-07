import React from 'react';
import styled from 'styled-components';
import Section from "./Section";
import carsInfo from '../carInfo';

const Home = () => (
  <Container>
    {carsInfo.map((car) => (
      <Section
        title={car.title}
        description={car.description}
        backgroundImg={car.image}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        key={car.id}
      />
    ))}
    <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
    />
    <Section
      title="Solar for New Roofs"
      description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
    />
    <Section
      title="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop now"
      rightBtnText=""
    />
  </Container>
);

export default Home;

const Container = styled.div`
  height: 100vh;
`