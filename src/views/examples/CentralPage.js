import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

import bg from "../../assets/img/central-bg.jpg";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

const items = [
  {
    src: require("../../assets/img/central-carousel1.jpg"),
    altText: "ประเพณีอุ้มพระดำน้ำ",
    caption: "ประเพณีอุ้มพระดำน้ำ",
  },
  {
    src: require("../../assets/img/central-carousel2.jpeg"),
    altText: "ประเพณีวิ่งควาย ",
    caption: "ประเพณีวิ่งควาย ",
  },
  {
    src: require("../../assets/img/central-carousel3.jpg"),
    altText: "ประเพณี บายศรีสู่ขวัญข้าว",
    caption: "ประเพณี บายศรีสู่ขวัญข้าว",
  },
];

function CentralPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title="เทศกาลภาคกลาง"
          titleEnglish="Central Festival"
          bg={bg}
        />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">ภาคกลาง</h2>
                <h5 className="description">
                  ภาคกลาง
                  ดินแดนแห่งความหลากหลายทางประเพณีและวัฒนธรรมที่มีความน่าสนใจไม่น้อยไปกว่าภาคอื่นของไทย
                  เพราะเป็นเมืองที่เต็มไปด้วยเสน่ห์มนต์ขลัง
                  ชวนให้น่าขึ้นไปสัมผัสความงดงามเหล่านี้ยิ่งนักภาคกลางมีทั้งสิ้น
                  22 จังหวัด ได้แก่ กรุงเทพมหานคร กำแพงเพชร ชัยนาท นครนายก
                  นครปฐม นครสวรรค์ นนทบุรี ปทุมธานี พระนครศรีอยุธยา พิจิตร
                  พิษณุโลก เพชรบูรณ์ ลพบุรี สมุทรปราการ สมุทรสงคราม สมุทรสาคร
                  สระบุรี สิงห์บุรี สุโขทัย สุพรรณบุรี อ่างทอง และอุทัยธานี
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/central-1.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      ประเพณีรับบัว
                      เป็นประเพณีเก่าแก่ที่เกิดและจัดขึ้นในอำเภอบางพลี
                      จังหวัดสมุทรปราการ มาช้านานแต่เพิ่งปรากฏหลักฐานในราว พ.ศ.
                      ๒๔๖๗ ว่าเดิมจัดในวันขึ้น ๑๔ ค่ำ เดือน ๑๑ ของทุกปี
                      และจากคำบอกเล่าของผู้เฒ่าผู้แก่ชาวอำเภอบางพลีดังเป็นที่ทราบกันโดยทั่วไปแล้วนั่นเอง
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/central-3.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/central-2.jpg") + ")",
                    }}
                  ></div>
                  <h3>บุญเดือนสาม</h3>
                  <p>
                    แสดงให้เห็นถึงการระลึกถึงคุณประโยชน์ของธรรมชาติ
                    ด้วยการบูชาพระแม่โพสพ
                    นับเป็นการสืบทอดและอนุรักษ์ไว้ซึ่งประเพณีอันดีงามของท้องถิ่นให้คงอยู่สืบไป
                    และเป็นการส่งเสริมการท่องเที่ยวของอำเภอบ้างฉาง
                    และจังหวัดระยอง
                    ตลอดจนเป็นการเสริมสร้างความสามัคคีระหว่างส่วนราชการ
                    รัฐวิสาหกิจภาคเอกชน พ่อค้า
                    และประชาชนในท้องถิ่นที่ร่วมกันจัดกิจกรรมงานประเพณีของท้องถิ่นอีกด้วย
                  </p>
                  <h3>ประเพณีนบพระ เล่นเพลง</h3>
                  <p>
                    เป็นประเพณีไทยสมัยโบราณ
                    เมื่อถึงวันเพ็ญเดือนสามหรือวันมาฆบูชา เจ้าฟ้า
                    เจ้าแผ่นดินก็จะนำผู้ครองนครเจ้าเมืองน้อยใหญ่
                    พร้อมทั้งเหล่าไพร่ฟ้าข้าราชบริพารและประชาชน
                    จัดตกแต่งขบวนเป็นพยุหยาตรา พากันไปนมัสการพระบรมสารีริกธาตุ ณ
                    วัดพระบรมธาตุ เป็นประจำ เรียกสั้นๆ ว่าพากันไป “นบพระ”
                    เป็นธรรมดาของชาวไทยทั่วไป ซึ่งมีอารมณ์ศิลปินประจำใจ
                    เมื่อมาอยู่ร่วมกันเป็นจำนวนมาก
                    โดยเฉพาะอย่างยิ่งมาจากต่างท้องถิ่นกันด้วย
                    จึงจัดการแสดงการละเล่นต่างๆ
                    ประกวดประชันแข่งขันกันตามขนบธรรมเนียมประเพณีของแต่ละหมู่บ้านเรียกกันว่า
                    “เล่นเพลง”
                  </p>
                  <h3>ประเพณีแห่พระบรมสารีริกธาตุวัดนางชี</h3>
                  <p>
                    ทางวัดจะนำพระบรมสารีริกธาตุมาให้สรงน้ำกันในตอนเช้า
                    หลังจากนั้นก็จะเคลื่อนขบวน
                    โดยมีเรือที่คอยลากจูงเรือพระที่เป็นเรือใหญ่ตั้งบุษบกและตกแต่งสวยงาม
                    และมีวงปี่พาทย์บรรเลง
                    ในสมัยต่อมาให้เรือยนต์เป็นเรือประดิษฐานพระบรมสารีริกธาตุเรือที่ตามขบวนเป็นเรือหางยาวและชาวบ้านไม่ได้มาร่วมขบวนเหมือนสมัยก่อน
                    แต่จะนั่งดูขบวนแห่ตามริมคลอง ในขบวนมีการละเล่น
                    ร้องรำทำเพลงเมื่อถึงวัดไก่เตี้ยก็จะอัญเชิญพระบรมสารีริกธาตุขึ้นประดิษฐานให้ชาวบ้านได้สักการะบูชา
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="title">
              <h4>ภาพงานเทศกาลภาคกลาง</h4>
            </div>
            <Row className="justify-content-center">
              <Col lg="8" md="12">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>{item.caption}</h5>
                        </div>
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default CentralPage;
