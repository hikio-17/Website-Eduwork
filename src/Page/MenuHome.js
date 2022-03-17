import React, {Component} from 'react';
import { Container, Row, Carousel,Col, Card, Placeholder} from 'react-bootstrap'

const MenuHome = () => {
	
	return (
		<div>
			{/*Bagian Carousel*/}
			<Container style={{backgroundColor: ""}}>
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
	          </Carousel>
	        </Container>

	    	{/*Bagian Card*/}
	    	<Container style={{backgroundColor: "yellow", marginTop: "50px"}}>
	          <h2 align="center">Aneka Makanan</h2>
	          <Row xs={1} md={4} className="g-4 text-center mt-1" >
	            <Col>
	              <Card>
	                <Card.Img variant="top" src="http://assets.kompasiana.com/items/album/2017/06/16/jus-sehat-untuk-jantung-594354bda07a63124e492c32.jpg"
	                	height="150px"
	                 />
	                <Card.Body>
	                  <Card.Title>Minuman Segar</Card.Title>
	                  <Card.Text>
					      <Placeholder as={Card.Text} animation="glow">
					        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
					        <Placeholder xs={6} /> <Placeholder xs={8} />
					      </Placeholder>
					      <Placeholder.Button variant="primary" xs={6} />
	                  </Card.Text>
	                </Card.Body>
	              </Card>
	            </Col>
	            <Col>
	              <Card>
	                <Card.Img variant="top" src="https://cdn1-production-images-kly.akamaized.net/9BaoDYDpYXY4nPAAJ3i2GgPdZPk=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2802943/original/078032100_1557636633-iStock-931308812.jpg" 
	                	height="150px"
	                />
	                <Card.Body>
	                  <Card.Title>Junk Food</Card.Title>
	                  <Card.Text>
					      <Placeholder as={Card.Text} animation="glow">
					        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
					        <Placeholder xs={6} /> <Placeholder xs={8} />
					      </Placeholder>
					      <Placeholder.Button variant="primary" xs={6} />
	                  </Card.Text>
	                </Card.Body>
	              </Card>
	            </Col>
	            <Col>
	              <Card>
	                <Card.Img variant="top" src="https://cdn-cas.orami.co.id/parenting/images/menu_padang_hero.original.jpegquality-90.jpg" 
	                	height="150px"
	                />
	                <Card.Body>
	                  <Card.Title>Masakan Padang</Card.Title>
	                  <Card.Text>
					      <Placeholder as={Card.Text} animation="glow">
					        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
					        <Placeholder xs={6} /> <Placeholder xs={8} />
					      </Placeholder>
					      <Placeholder.Button variant="primary" xs={6} />
	                  </Card.Text>
	                </Card.Body>
	              </Card>
	            </Col>
	            <Col>
	              <Card>
	                <Card.Img variant="top" src="https://media-infokes.com/wp-content/uploads/2021/10/bonefish-seafood-platter.jpg" 
	                	height="150px"
	                />
	                <Card.Body>
	                  <Card.Title>Sea Food</Card.Title>
	                  <Card.Text>
					      <Placeholder as={Card.Text} animation="glow">
					        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
					        <Placeholder xs={6} /> <Placeholder xs={8} />
					      </Placeholder>
					      <Placeholder.Button variant="primary" xs={6} />
	                  </Card.Text>
	                </Card.Body>
	              </Card>
	            </Col>
	        </Row>
	        </Container>

	    	{/*Bagian Footer*/}
	        <Container className="mt-5 text-center" >
	          <Row style={{backgroundColor: "#69d2e7", height: "50px"}}>
	            <Col>
	              <p>Jl.Depati Parbo no.39 , Sungai Penuh, jambi</p>
	              <p style={{marginTop: "-15px"}}>admin_Qinara_Resto@gmail.com</p>
	            </Col>
	          </Row>
	        </Container>
		</div>
	)
}


export default MenuHome;