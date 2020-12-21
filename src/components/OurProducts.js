import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import Circle from "./asset/Circle";
import "./App.css";

export default function OurProducts({ id }) {
  const styles = {
    content: {
      marginTop: "120px",
      marginBottom: "40px",
    },
    header: {
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
    },
    title: {
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    crop: {
      overflow: "hidden",
      width: "120px",
      height: "120px",
      margin: "15px",
    },
    noBorder: {
      border: "0px",
      borderBottom: "1px solid #919191"
    }
  };

  return (
    <Container fluid style={styles.content} id={id}>
      <Row>
        <Col>
          <h1 style={styles.header} className="text-center">
            {" "}
            Our Products{" "}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col style={styles.center} >
          <Image
            lassName="col-xs-1 center-block"
            style={styles.photos}
            src="https://i.ibb.co/9gvgj23/Logo-Batik-1-putih.jpg"
            width="170"
          />
        </Col>
        <Col sm={10}>
          <Card className="text-left" style={styles.noBorder} >
            <Card.Body>
              <Card.Title style={styles.title}>BATIK</Card.Title>
              <Card.Text>
                A “Batik” themed SuperApps that has multiple services such as
                MarketPlace, Video Steaming Platform, News & Article and also an
                Education corner about Batik.
                <br />
                <br />
                We collaborate with DEKRANAS DIY and Eksiskomunika to develop a
                super apps to help UMKM batik in Indonesia, starting from Java
                to adapt digital platform as the base economy platform.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col style={styles.center} >
          <div style={styles.crop}>
            <Image src="https://i.ibb.co/b1qhzWY/pasolah.png" width="320" />
          </div>
        </Col>
        <Col sm={10}>
          <Card className="text-left" style={styles.noBorder}>
            <Card.Body>
              <Card.Title style={styles.title}>PASO</Card.Title>
              <Card.Text>
                An easy, flexible, free and visual solutions for you to manage
                your projects and to organize everything.
                <br />
                <br />
                We collaborated with CyberMANTRA to create a platform for those
                who have a problem on how to manage and organize their projects
                visually,
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col style={styles.center}>
          <div style={styles.crop}>
            <Image
              src="https://cybermantra.net/wp-content/uploads/2020/02/simpanan.jpg"
              width="520"
            />
          </div>
        </Col>
        <Col sm={10}>
          <Card className="text-left" style={styles.noBorder}>
            <Card.Body>
              <Card.Title style={styles.title}>SIMPANAN</Card.Title>
              <Card.Text>
                A one stop solution for you to secure, share and manage all your
                files, content and data.
                <br />
                <br />
                We collaborated with CyberMANTRA to help create a platform for
                those who need a place to store, manage and share their files,
                content and data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col style={styles.center}> 
          <div style={styles.crop}>
            <Image
              src="https://cybermantra.net/wp-content/uploads/2020/02/jepe-1.jpg"
              width="550"
            />
          </div>
        </Col>
        <Col sm={10}>
          <Card className="text-left" style={styles.noBorder}>
            <Card.Body>
              <Card.Title style={styles.title}>JEPE</Card.Title>
              <Card.Text>
                Jepe facilitated administrator to manage remote server inside a
                datacenter with the easiest and secure ways, without any
                third-party.
                <br />
                <br />
                nnWe collaborate with CyberMANTRA to help create a platform to
                help administrator manage remote server inside a data center
                with easy and secure ways without any third-party.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
