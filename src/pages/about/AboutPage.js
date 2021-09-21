import React from "react";
import Nav from "../../components/Nav";
import BlockQuote from "../../components/BlockQuote";
import BlockText from "../../components/BlockText";
import BlockImage from "../../components/BlockImage";
import quotes from "./Quotes";
import bougainvillea from "../../assets/bougainvillea.jpg";
import "../../styles/about.scss";

const AboutPage = () => {
  return (
    <div>
      <Nav tab={{ name: "About", value: "about", path: "/about" }} />
      <div id="about"
        className="container">
        <BlockText>
            <BlockImage image={bougainvillea} altTxt="bougainvillea"></BlockImage>
        </BlockText>
        <BlockQuote quotes={quotes}></BlockQuote>
      </div>
    </div>
  );
};

export default AboutPage;
