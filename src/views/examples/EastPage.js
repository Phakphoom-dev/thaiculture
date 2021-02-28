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

import bg from "../../assets/img/east-bg.jpg";
import tabImg1 from "../../assets/img/tab-east-1.jpg";
import tabImg2 from "../../assets/img/tab-east-2.jpg";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function EastPage() {
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
          title="เทศกาลภาคอีสาน"
          titleEnglish="East Festival"
          bg={bg}
        />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">ภาคตะวันออกเฉียงใต้ หรือ ภาคอีสาน</h2>
                <h5 className="description">
                  เป็นแหล่งรวมอารยธรรมอันหลากหลาย
                  จากความเชื่อที่สืบทอดต่อกันมาตั้งแต่อดีตจนถึงปัจจุบัน
                  ว่าแต่ทางภาคอีสานจะมีเทศกาลไหน
                  ที่ครั้งหนึ่งคุณต้องไปให้ได้สักครั้ง ไปดูกัน!
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
                        "url(" + require("assets/img/east-1.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      ปราสาทหินพนมรุ้ง
                      สร้างด้วยศิลาแลงและหินทรายสีชมพูอย่างยิ่งใหญ่อลังการ
                      มีการออกแบบผังปราสาทตามความเชื่อที่สอดคล้องกับลักษณภูมิประเทศ
                      ศาสนสถานแต่ละส่วนประดับและแกะสลักลวดลายเป็นรูปเทพเจ้าและเรื่องราวทางศาสนาวิจิตรงามตา
                      และทุกปีในวันขึ้น 15 ค่ำเดือนประมาณเดือนเมษายน
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/east-3.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/east-2.jpg") + ")",
                    }}
                  ></div>
                  <h3>เทศกาลชมเขาพนมรุ้งและ แห่เทียนเข้าพรรษา</h3>
                  <p>
                    เป็นเทศกาลประจำปีที่หลายคนคุ้นเคยกันดี
                    เป็นประเพณีสำคัญมาตั้งแต่สมัยสุโขทัย จนมาถึงปัจจุบัน
                    รวมเวลากว่า 116 ปี
                    ซึ่งแต่เดิมเป็นการขุดบั้งไฟแต่เห็นว่าเป็นอันตรายต่อผู้คน
                    โดยภายในงานมีการจัดขบวนเทียนแกะการสลักขี้ผึ้งเป็นลวดลายต่างๆ
                    ส่วนมากเป็นเรื่องราวเกี่ยวกับประวัติศาสตร์เกือบทั้งหมด
                    แต่ละขบวนจะมีนางรำมีการฟ้อนรำประกอบขบวน
                    เรียกได้ว่ายิ่งใหญ่อลังการสุดๆ
                  </p>
                  <p>
                    ปราสาทหินพนมรุ้ง
                    สร้างด้วยศิลาแลงและหินทรายสีชมพูอย่างยิ่งใหญ่อลังการ
                    มีการออกแบบผังปราสาทตามความเชื่อที่สอดคล้องกับลักษณภูมิประเทศ
                    ศาสนสถานแต่ละส่วนประดับและแกะสลักลวดลายเป็นรูปเทพเจ้าและเรื่องราวทางศาสนาวิจิตรงามตา
                    และทุกปีในวันขึ้น 15 ค่ำเดือนประมาณเดือนเมษายน
                    จะมีเทศกาลขึ้นเขาพนมรุ้ง เพื่อชมปรากฎการณ์อันน่าอัศจรรย์
                    นั่นคือพระอาทิตย์จะสาดแสงตรงเป็นลำทะลุช่องประตูปราสาททั้ง 15
                    บาน และพิธีบวงสรวงองค์พระศิวะและสิ่งศักดิ์สิทธิ์บนเขาพนมรุ้ง
                    การแสดง แสง สี เสียง สุดตระการตา
                  </p>
                  <p>
                    เทศกาลไหลเรือไฟ จัดขึ้นทุกปีหลังช่วงออกพรรษา
                    วัตถุประสงค์เพื่อเพื่อบูชาองค์พระสัมมาสัมพุทธเจ้า
                    สิ่งศักดิ์สิทธิ์ พญานาค และการขอขมาพระแม่คงคา
                    จุดเด่นของงานนอกจากเรือไฟแล้ว ยังมีการรำบูชาองค์พระธาตุพนม
                    รวมถึงมีการจัดงานกาชาด เพื่อจำหน่ายสินค้านานาชนิด
                    สินค้าโอท็อป และการแสดงพื้นเมือง
                    จากเจ็ดชนเผ่าของจังหวัดนครพนม
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
                          เทศกาลเที่ยวทุ่งดอกกระเจียวบาน
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
                          เทศกาลชมแห่นาคโหด
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
                          ทุ่งดอกกระเจียว อุทยานแห่งชาติป่าหินงาม
                          ตั้งอยู่ในท้องที่อำเภอเทพสถิต มีเนื้อที่ 62,437.50 ไร่
                          หรือ 99.9 ตารางกิโลเมตร จะทยอยผลิบานเป็นระยะเวลา 2
                          เดือน
                          และจะบานสะพรั่งเต็มผืนป่าในช่วงเดือนมิถุนายนจนถึงเดือนสิงหาคมของทุกปี
                          เวลาที่เหมาะสมคือช่วงเช้าที่มีสายหมอกบางๆ ปกคลุม
                          นอกจากนั้นยังมี ลานหินงาม
                          มีลักษณะเป็นผาหินยื่นออกไปในอากาศ
                          ทิวทัศน์สวยขนาดนี้ต้องไปเช็คอินสักครั้ง
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
                          ประเพณีโบราณที่ปฏิบัติสืบทอดต่อกันมาหลายร้อยปี
                          เพื่อให้ลูกหลานได้บวชแทนคุณบิดามารดา ด้วยการ แห่นาค
                          จากบ้านตนเองรอบหมู่บ้าน
                          โดยจะใช้คนหนุ่มที่ยังไม่ได้บวชของแต่ละหมู่บ้าน
                          มาช่วยกันหามแคร่ไม้ไผ่ แห่นาคไปรอบหมู่บ้าน
                          และเขย่าโยนนาคอย่างรุนแรง
                          ใครที่ชอบความตื่นเต้นไม่ควรพลาด
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

export default EastPage;
