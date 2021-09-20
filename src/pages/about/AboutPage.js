import React from "react";
import Nav from "../../components/Nav";
import BlockQuote from "../../components/BlockQuote";
import BlockText from "../../components/BlockText";
import BlockImage from "../../components/BlockImage";
import quotes from "./Quotes";
import flowerfield from "../../assets/flowerfield.jpg";

const AboutPage = () => {
  return (
    <div>
      <Nav tab={{ name: "About", value: "about", path: "/about" }} />
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "4em",
          justifyContent: "center",
        }}
      >
        <BlockText>
          <BlockImage image={flowerfield} altTxt="flower field" />
        </BlockText>
        <BlockQuote quotes={quotes}></BlockQuote>
      </div>
    </div>
  );
};

export default AboutPage;
