import React, { useEffect } from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <div id="s">
        <Section
          id="s"
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
      </div>
      <div id="y">
        <Section
          id="y"
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
      </div>
      <div id="3">
        <Section
          id="3"
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
      </div>
      <div id="x">
        <Section
          id="x"
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
      </div>
      <div id="sp">
        <Section
          id="sp"
          title="Lowest Cost Solar Panes in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
      </div>
      <div id="sr">
        <Section
          id="sr"
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
      </div>
      <div id="ac">
        <Section
          id="ac"
          title="Accessories"
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
          accessory
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
export function handleClickScroll({ id }) {
  switch (id) {
    case "s":
      document.getElementById("y")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "y":
      document.getElementById("3")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "3":
      document.getElementById("x")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "sp":
      document.getElementById("sr")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "x":
      document.getElementById("sp")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "sr":
      document.getElementById("ac")?.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      document.getElementById("s")?.scrollIntoView({ behavior: "smooth" });
  }
}
