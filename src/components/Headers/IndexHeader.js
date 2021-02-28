/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Container,
  Button,
  Row,
  Col,
  Progress,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import bg1 from "../../assets/img/festival-bg.jpg";
import bg2 from "../../assets/img/hero1.jpg";
import bg3 from "../../assets/img/hero2.jpg";
import bg4 from "../../assets/img/north-bg.jpg";
import bg5 from "../../assets/img/central-bg.jpg";
import bg6 from "../../assets/img/east-bg.jpg";
import bg7 from "../../assets/img/south-bg.jpg";

function IndexHeader() {
  let pageHeader = React.createRef();
  const pictureArray = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  const selectedPicture = pictureArray[randomIndex];

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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${selectedPicture})`,
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1>Thai Festival</h1>
            <h1>ALL AROUND THAILAND</h1>
            <Col md="9" className="mx-auto px-auto">
              <Nav
                className="nav-pills-info nav-pills-just-icons"
                pills
                role="tablist"
              >
                <NavItem className="px-1">
                  <Button color="primary" size="lg" to="north-page" tag={Link}>
                    North
                  </Button>
                </NavItem>
                <NavItem className="px-1">
                  <Button color="primary" size="lg" to="east-page" tag={Link}>
                    East
                  </Button>
                </NavItem>
                <NavItem className="px-1">
                  <Button
                    color="primary"
                    size="lg"
                    to="central-page"
                    tag={Link}
                  >
                    Central
                  </Button>
                </NavItem>
                <NavItem className="px-1">
                  <Button color="primary" size="lg" to="south-page" tag={Link}>
                    South
                  </Button>
                </NavItem>
              </Nav>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
