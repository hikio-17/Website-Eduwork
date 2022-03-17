import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Carousel, Card,Nav } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <div>
        <Container fixed="top">
            <Row className="text-center text-white p-2" style={{backgroundColor: "#fa6900"}} >
              <Col colSpan={2}>
                <Navbar.Brand>
                  Qinara Resto
                </Navbar.Brand>
              </Col>
            </Row>
            <Row className="text-center p-1 fs-5" style={{backgroundColor: "#f38630"}}>
              <Col><a href="" className="text-white ">Makanan</a></Col>
              <Col><a href="">Minuman</a></Col>
            </Row>
        </Container>
        <br />

        <Container style={{backgroundColor: "lightgrey"}}>
          <Carousel className="p-2 mr-2">
            <Carousel.Item>
              <img
                className="d-block  w-100"
                style={{height: "500px"}}
                src="https://perfect10cooking.id/wp-content/uploads/2020/01/New-Project-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "500px"}}
                src="https://perfect10cooking.id/wp-content/uploads/2020/01/New-Project-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "500px"}}
                src="https://perfect10cooking.id/wp-content/uploads/2020/01/New-Project-1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container style={{backgroundColor: "lightgrey"}}>
          <h2 align="center">Aneka Makanan</h2>
          <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>

        <Container className="mt-5">
          <Row style={{backgroundColor: "#69d2e7"}}>
            <Col>
              Footer
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main;