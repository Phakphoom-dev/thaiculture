import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  CardImg,
} from "reactstrap";

import bg from "../../assets/img/north-bg.jpg";
import tabImg1 from "../../assets/img/north-5.jpg";
import tabImg2 from "../../assets/img/tab-img2.jpeg";
import tabImg3 from "../../assets/img/tab-img3.jpg";
import tabImg4 from "../../assets/img/tab-img4.jpg";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function NorthPage() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
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
          title="เทศกาลภาคเหนือ"
          titleEnglish="North Festival"
          bg={bg}
        />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">ภาคเหนือ หรือล้านนา</h2>
                <h5 className="description">
                  ดินแดนแห่งความหลากหลายทางประเพณีและวัฒนธรรมที่มีความน่าสนใจไม่น้อยไปกว่าภาคอื่นของไทย
                  เพราะเป็นเมืองที่เต็มไปด้วยเสน่ห์มนต์ขลัง
                  ชวนให้น่าขึ้นไปสัมผัสความงดงามเหล่านี้ยิ่งนักภาคเหนือมีทั้งสิ้น
                  17 จังหวัด แบ่งออกเป็น ภาคเหนือตอนบน และภาคเหนือตอนล่าง ได้แก่
                  จังหวัดเชียงราย จังหวัดเชียงใหม่ จังหวัดน่าน จังหวัดพะเยา
                  จังหวัดแพร่ จังหวัดแม่ฮ่องสอน จังหวัดลำปาง จังหวัดลำพูน
                  จังหวัดอุตรดิตถ์ จังหวัดตาก จังหวัดพิษณุโลก จังหวัดสุโขทัย
                  จังหวัดเพชรบูรณ์ จังหวัดพิจิตร จังหวัดกำแพงเพชร
                  จังหวัดนครสวรรค์ และจังหวัดอุทัยธานี
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
                        "url(" + require("assets/img/north-2.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      ประเพณียี่เป็งของชาวล้านนานั้น
                      นับว่าอยู่บนฐานความเชื่อเดียวกับประเพณีลอยกระทงในภูมิภาคอื่นๆ
                      วัตถุประสงค์สำคัญคือการขอขมาแม่พระคงคา
                      และบูชาองค์พระสัมมาสัมพุทธเจ้านั่นเองรวมถึงสิ่งศักดิ์สิทธิ์ตามความเชื่อของชาวล้านนาด้วย{" "}
                      <br></br>
                      <br></br>
                      <small>- Lanna</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/north-4.png") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/north-3.jpg") + ")",
                    }}
                  ></div>
                  <h3>ประเพณีแข่งเรือล้านนา และ ยี่เป็ง</h3>
                  <p>
                    ในพงศาวดารโยนกและจามเทวี
                    ได้บันทึกเรื่องราวเกี่ยวกับประเพณียี่เป็งเอาไว้ว่า
                    ครั้งหนึ่งเมื่อบ้านเมืองเกิดภัยร้ายแรงด้วยโรคอหิวาตกโรคขึ้นที่แคว้นหริภุญไชย
                    ชาวเมืองล้มตายเป็นจำนวนมาก
                    ทำให้ชาวเมืองที่เหลือต้องอพยพไปอยู่เมืองหงสาวดีนานถึง 6 ปี
                    จึงกลับคืนสู่บ้านเมืองเดิม
                    ครั้นถึงเวลาเวียนมาบรรจบครบวันที่ต้องจากบ้านเมืองไป
                    จึงได้ทำพิธีรำลึกถึงญาติพี่น้องที่ล่วงลับไปแล้วด้วยการทำกระถางใส่เครื่องสักการบูชา
                    ธูปเทียนลอย แล้วนำไปลอยตามน้ำ เรียกว่า การลอยโขมดหรือลอยไฟ
                    นั่นจึงเป็นที่มาของประเพณียี่เป็งที่มีมาจนถึงทุกวัน
                  </p>
                  <p>
                    ประเพณีแข่งเรือล้านนาจะถูกจัดขึ้น ณ ลำน้ำน่านทุกปี ในระยะ
                    หลังเทศกาลออกพรรษา
                    ประมาณปลายเดือนตุลาคมหรือต้นเดือนพฤศจิกายน
                    นอกจากเพื่อความสนุกสนานรื่นเริงและเพื่อเชื่อม
                    ความสามัคคีแล้วยังเป็นการอนุรักษ์วัฒนธรรม ประเพณี
                    การแข่งเรือแบบล้านนาในงานจะมีการแข่งขันเรือหลายประเภทคือ
                    เรือใหญ่ เรือกลาง และเรือสวยงาม
                    โดยเรือที่เข้าแข่งขันทุกลำต้องแต่งหัวเรือเป็นรูปพญานาค
                    เพื่อคงไว้ซึ่งเอกลักษณ์ของเรือแข่งจังหวัดน่าน
                    นอกจากนั้นจะมีการตีฆ้อง ล่องน่าน-ตีตานแข่งเรือ
                    ซึ่งเป็นประเพณีดั้งเดิมของจังหวัด
                  </p>
                  <p>
                    เอกลักษณ์ของเรือเมืองล้านนา
                    มีความงดงามไม่เหมือนเรือแข่งจังหวัดใดในประเทศไทย คือ
                    เป็นเรือที่ขุดจากไม้ตะเคียนหรือตะเคียนทองทั้งต้น
                    ด้วยเชื่อกันว่ามีความทนทานและผีนางไม้แรง
                    โดยเฉพาะเอกลักษณ์ตรงหัวเรือหรือโขนเรือ
                    ที่แกะสลักเป็นหัวพญานาคแบบล้านนา กำลังแสยะเขี้ยวแสดงอำนาจ
                    ส่วนท้ายเรือสลักเป็นหางของพญานาค มีความสวยงามเป็นอย่างยิ่ง
                    เชื่อกันว่าพญานาคมีความศักดิ์สิทธิ์
                    จะดลบันดาลให้ฝนฟ้าอุดมสมบูรณ์ สามารถทำไร่ ทำนาได้ตามฤดูกาล
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10" xl="6">
                <p className="category">เทศกาลอื่น ๆ</p>
                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={pills === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setPills("1");
                          }}
                        >
                          เทศกาลชมสวนอุทยานหลวงราชพฤกษ์
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={pills === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setPills("2");
                          }}
                        >
                          มหกรรมไม้ดอกไม้ประดับเชียงใหม่
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={pills === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setPills("3");
                          }}
                        >
                          ประเพณีเดินขึ้นดอยสุเทพ
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={pills === "4" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setPills("4");
                          }}
                        >
                          ประเพณีบูชาเสาอินทขิล
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="text-center"
                      activeTab={"pills" + pills}
                    >
                      <TabPane tabId="pills1">
                        <CardImg
                          top
                          width="100%"
                          src={tabImg1}
                          alt="Card image cap"
                          className="img-round mb-3"
                        />
                        <p>
                          โด่งดังมาจากการจัดงานมหกรรมพืชสวนโลกเฉลิมพระเกียรติฯ
                          งานเทศกาลชมสวน หรือ Flora Festival
                          นี้จะจัดขึ้นในช่วงเดือนธันวาคมถึงกุมภาพันธ์
                          มีการจัดแสดงสวนสวยในรูปแบบต่างๆ
                          ที่ตกแต่งด้วยไม้ประดับและดอกไม้เมืองหนาวนานาพรรณจากโครงการหลวงกว่า
                          20 โครงการ
                          ที่มีชื่อเสียงที่สุดคืออุทยานกล้วยไม้และอุโมงค์ดอกไม้ที่เป็นจุดถ่ายภาพยอดนิยมของนักท่องเที่ยวส่วนใหญ่
                          สถานที่จัดงาน อุทยานหลวงราชพฤกษ์ ต.แม่เหียะ
                          อ.เมืองเชียงใหม่
                        </p>
                      </TabPane>
                      <TabPane tabId="pills2">
                        <CardImg
                          top
                          width="100%"
                          src={tabImg2}
                          alt="Card image cap"
                          className="img-round mb-3"
                        />
                        <p>
                          ช่วงต้นเดือนกุมภาพันธ์จะเป็นช่วงของการจัดงานมหกรรมไม้ดอกไม้ประดับอีกหนึ่งงานอีเว้นท์ที่หลายคนรอคอย
                          มีการจัดขบวนแห่รถบุปผชาติที่ยิ่งใหญ่ตระการตา
                          การประกวดนางงามบุปผชาติและนางงามบุปผชาตนานาชาติ
                          การประกวดไม้ดอกไม้ประดับ การประกวดจัดสวน
                          การแสดงดนตรีในสวน
                          การออกร้านจำหน่ายสินค้าโอท็อปและสินค้าเกษตรเชียงใหม่
                          สถานที่จัดงาน สวนสาธารณะหนองบวกหาด อ.เมืองเชียงใหม่
                        </p>
                      </TabPane>
                      <TabPane tabId="pills3">
                        <CardImg
                          top
                          width="100%"
                          src={tabImg3}
                          alt="Card image cap"
                          className="img-round mb-3"
                        />
                        <p>
                          ประเพณีเดินขึ้นดอยสุเทพ
                          งานบุญที่จะจัดขึ้นในช่วงวันวิสาขบูชาประมาณปลายเดือนพฤษภาคม
                          มีขบวนแห่น้ำสรงและผ้าไตรพระราชทานจากลานอนุสาวรีย์ครูบาศรีวิชัยขึ้นไปยังวัดพระธาตุดอยสุเทพ
                          จากนั้นจะมีพิธีทำบุญตักบาตรและพิธีถวายน้ำสรงพระราชทานแด่องค์พระบรมธาตุดอยสุเทพ
                          และพิธีเวียนเทียนรอบพระบรมธาตุฯ สถานที่จัดงาน
                          วัดพระธาตุดอยสุเทพ ต.สุเทพ อ.เมืองเชียงใหม่
                        </p>
                      </TabPane>
                      <TabPane tabId="pills4">
                        <CardImg
                          top
                          width="100%"
                          src={tabImg4}
                          alt="Card image cap"
                          className="img-round mb-3"
                        />
                        <p>
                          งานทำบุญบูชาเสาอินทขิลหรือเสาหลักเมืองซึ่งจะจัดขึ้นในช่วงปลายพฤษภาคมหรือต้นมิถุนายน
                          ประชาชนจะนำดอกไม้ธูปเทียนใส่ขันหรือถาดมาถวายบูชาเสาอินทขิล
                          นอกจากนี้ในพิธีจะมีการอัญเชิญพระพุทธรูปพระเจ้าฝนแสนห่ามาเป็นองค์ประธานและมีการสวดคาถาอินทขิลโดยหมู่พระสงฆ์
                          สถานที่จัดงาน วัดเจดีย์หลวงวรวิหาร อ.เมืองเชียงใหม่
                        </p>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default NorthPage;
