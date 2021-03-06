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
        <BlockText text="Welcome" styles="block-hero-text">
            <BlockImage image={bougainvillea} altTxt="bougainvillea"></BlockImage>
        </BlockText>
        <BlockText>
          <p className="lead" style={{width:"100%"}}>At the Daffodil Mill, we are dedicated to capturing the season's beauty using flowers</p>
        </BlockText>
        <BlockQuote quotes={quotes}></BlockQuote>
      </div>
    </div>
  );
};

export default AboutPage;
