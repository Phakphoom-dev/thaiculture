import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
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
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/profile-bg2.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/profile-img.jpg")}></img>
          </div>
          <h3 className="title">Phakphoom Khumpuan</h3>
          <p className="category">Junior Developer</p>
          <div className="content">
            <div className="social-description">
              <h2>23</h2>
              <p>Years Old</p>
            </div>
            <div className="social-description">
              <h2>Inlove</h2>
              <p>With React</p>
            </div>
            <div className="social-description">
              <h2>0</h2>
              <p>GirlFriend</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
