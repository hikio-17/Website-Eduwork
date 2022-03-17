import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<div>
				<Container fixed="top">
		            <Row className="text-center text-white p-2" style={{backgroundColor: "#fa6900"}} >
		              <Col colSpan={2}>
		                <Navbar.Brand>
		                  <Link to="/" className="link">Qinara Resto</Link>
		                </Navbar.Brand>
		              </Col>
		            </Row>
		            <Row className="text-center p-1 fs-5" style={{backgroundColor: "#f38630"}}>
		              <Col className="menu"><Link to="/makanan" className="link">Makanan</Link></Col>
		              <Col className="menu"><Link to="/minuman" className="link">Minuman</Link></Col>
		            </Row>
		        </Container>
			</div>
		)
	}
}

export default Header;