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

import bg from "../../assets/img/south-bg.jpg";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

const items = [
  {
    src: require("../../assets/img/south-carousel1.jpg"),
    altText: "ลิเกป่า",
    caption: "ลิเกป่า",
  },
  {
    src: require("../../assets/img/south-carousel2.jpg"),
    altText: "ประเพณีสารทเดือนสิบ",
    caption: "ประเพณีสารทเดือนสิบ",
  },
  {
    src: require("../../assets/img/south-carousel3.jpg"),
    altText: "ประเพณีแห่พระแข่งเรือ",
    caption: "ประเพณีแห่พระแข่งเรือ",
  },
];

function SouthPage() {
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
          title="เทศกาลภาคใต้"
          titleEnglish="South Festival"
          bg={bg}
        />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">ภาคใต้</h2>
                <h5 className="description">
                  ภาคใต้
                  ดินแดนแห่งความหลากหลายทางประเพณีและวัฒนธรรมที่มีความน่าสนใจไม่น้อยไปกว่าภาคอื่นของไทย
                  เพราะเป็นเมืองที่เต็มไปด้วยเสน่ห์มนต์ขลัง
                  ชวนให้น่าขึ้นไปสัมผัสความงดงามเหล่านี้ยิ่งนักภาคใต้มีทั้งสิ้น
                  14 จังหวัด ได้แก่ จังหวัดกระบี่ จังหวัดชุมพร จังหวัดตรัง
                  จังหวัดนครศรีธรรมราช จังหวัดนราธิวาส จังหวัดปัตตานี
                  จังหวัดพังงา จังหวัดพัทลุง จังหวัดภูเก็ต จังหวัดระนอง
                  จังหวัดสตูล จังหวัดสงขลา จังหวัดสุราษฎร์ธานี จังหวัดยะลา
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
                        "url(" + require("assets/img/south-1.jpeg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      ประเพณีลอยเรือชาวเล
                      เป็นงานประเพณีเก่าแก่ที่หาดูได้ยากของชาวเลเกาะลันตา
                      งานนี้จัดขึ้นตรงกับวันเพ็ญเดือน 6 และเดือน 11
                      โดยกลุ่มชาวเลที่เกาะลันตาและเกาะใกล้เคียง
                      จะมาชุมนุมกันทำพิธีลอยเรือ เพื่อสะเดาะเคราะห์
                      บริเวณชายหาดใกล้กับบ้านศาลาด่าน มีการร้องรำทำเพลง
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/south-3.jpeg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/south-2.jpg") + ")",
                    }}
                  ></div>
                  <h3>ประเพณีชิงเปรต</h3>
                  <p>
                    เป็นประเพณีเนื่องในเทศกาลวันสารท
                    เดือนสิบของชาวไทยที่นับถือศาสนาพุทธ จัดทำในวัดทุกวัดในวันแรม
                    14 หรือ 15 ค่ำ เดือนสิบ
                    โดยทำร้านจัดสำรับอาหารคาวหวานไปวางอุทิศส่วนกุศลให้เปรตชน
                    (ปู่ ย่า ตา ยาย และบรรพบุรุษที่ล่วงลับไปแล้ว)
                    ร้านที่วางอาหารเรียกว่า ร้านเปรต ซึ่งสร้างไว้กลางวัด
                    ยกเสาสูง มีสี่เสาบ้าง เสาเดียวบ้าง
                    บนร้านเปรตจะมีสายสิญจ์วงไว้รอบและต่อยาวไปถึงที่พระสงฆ์นั่งทำพิธีกรรม
                    พิธีเสร็จบรรดาผู้มาร่วมทำบุญก็จะเข้าไปรุมแย่งอาหารสิ่งของ
                    อาหารคาวหวาน ที่อยู่บนร้านเปรตอย่างสนุกสนาน
                    จากนั้นก็จะจัดอาหารถวายเพลแก่พระภิกษุสงฆ์ทุกรูปที่อยู่ในวัด
                    ต่อจากนั้นผู้มาร่วมงานทุกคนก็จะกินอาหารร่วมกัน
                  </p>
                  <h3>ประเพณีชักพระ</h3>
                  <p>
                    วันออกพรรษา แรม 1 ค่ำ เดือน 11 ชาวบ้านกับวัดจะร่วมกัน
                    จัดให้มีการชักพระ
                    โดยสมมุติได้ไปต้อนรับพระพุทธเจ้าเสด็จกลับจากดาวดึงส์ ประทับ
                    บุษบกแห่เป็นขบวนไปยังสถานที่ต่างๆ
                    วัดใดจะชักพระบกหรือชักพระน้ำขึ้นอยู่กับความสะดวกของท้องถิ่น
                  </p>
                  <h3>ประเพณีแห่ผ้าขึ้นธาตุ</h3>
                  <p>
                    ชาวนครฯ
                    เชื่อมั่นว่าระบรมธาตุเจดีย์เป็นเสมือนตัวแทนของพระพุทธศาสนา
                    ภายในเจดีย์บรรจุพระบรมสารีริกธาตุ ทุกปีหนึ่งๆ
                    จะมีการบูชาบวงสรวง ปีละ 2 ครั้ง คือวันมาฆบูชา
                    และในวันวิสาขบูชา โดยนำผ้ามาห่อหุ้มองค์เจดีย์
                    เพื่อความเป็นสิริมงคล
                    มีการจัดขบวนแห่ผ้าพระบฏนำขึ้นไปถวายสักการะ ในเวลากลางคืน
                    จะเวียนเทียน
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="title">
              <h4>ภาพงานเทศกาลภาคใต้</h4>
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

export default SouthPage;
