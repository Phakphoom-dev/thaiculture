import React, { useState, useRef } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import bg from "../../assets/img/javascript-bg.png";
import { Motion, spring, presets } from "react-motion";
import { Container } from "reactstrap";
import Viewpager from "../../components/Viewpager";
import Animate from "../../components/Animate";
import { Row, Col } from "reactstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import styled, { keyframes } from "styled-components";

import img1 from "../../assets/img/ink1.jpg";
import img2 from "../../assets/img/ink2.jpg";
import img3 from "../../assets/img/ink3.jpg";

function JavascriptPage() {
  React.useEffect(() => {
    Aos.init({ duration: 2500 });
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }`;

  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  `;

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title="โชว์ของ Javascript"
          titleEnglish="Javascript Showcase"
          bg={bg}
        />
        <div className="section section-about-us">
          <Container>
            <Motion
              defaultStyle={{
                opacity: 0,
                translateY: 50,
              }}
              style={{
                opacity: spring(1),
                translateY: spring(0, presets.wobbly),
              }}
            >
              {(interpolatedStyles) => (
                <div
                  style={{
                    transform: `translateY(${interpolatedStyles.translateY}px)`,
                    opacity: interpolatedStyles.opacity,
                  }}
                >
                  <h1>Javascript Showcase</h1>
                </div>
              )}
            </Motion>
          </Container>
          <Row className="ml-5">
            <Col>
              <Viewpager bg="dahyun.png" />
            </Col>
          </Row>

          <Row>
            <Col className="w-25 ml-2">
              <img src={img1} alt="" data-aos="fade-up" className="img-fluid" />
            </Col>
            <Col className="">
              <img
                src={img2}
                alt=""
                data-aos="fade-down"
                className="img-fluid"
              />
              <img
                src={img3}
                alt=""
                data-aos="fade-left"
                className="img-fluid mt-3"
              />
            </Col>
          </Row>
          <Rotate>&lt; 💅🏾 &gt;</Rotate>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default JavascriptPage;
