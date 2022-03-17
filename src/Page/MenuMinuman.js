import React from 'react';
import DaftarMinuman from '../Lib/DaftarMinuman';
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const MenuMinuman = () => {
	return (
		<div>
			<Container className="text-center mt-5">
				<h3>Daftar Minuman Favorit</h3>
				<Row xs={1} md={5} className="g-4 mt-2">
				{DaftarMinuman.map((data, index) => {
					return (
						<Col>
							<Card>
								<Card.Img
									varinat="top"
									src={data.img}
									height="150px"
								/>
								<Card.Body>
									<Card.Title>{data.NamaMinuman}</Card.Title>
									<Card.Text>Rp{data.Harga}</Card.Text>
									<Button varinat="primary">Pesan Sekarang</Button>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
				</Row>
			</Container>
		</div>
	)
}

export default MenuMinuman;