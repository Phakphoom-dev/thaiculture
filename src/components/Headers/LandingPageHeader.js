import React, { useState } from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader(props) {
  const { title, titleEnglish, bg } = props;
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${bg})`,
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">{titleEnglish}</h1>
            <h2>{title}</h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
