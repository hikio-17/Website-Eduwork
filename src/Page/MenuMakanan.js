import React from 'react';
import DaftarMakanan from '../Lib/DaftarMakanan';
import { Container, Card, Col, Row, Button} from "react-bootstrap";


const MenuMakanan = () => {
	return (
		<div>
			<Container className="text-center mt-5">
				<h3>Daftar Makanan Favorit</h3>
				<Row xs={1} md={5} className="g-4 text-center mt-2">
				{DaftarMakanan.map((data, index) => {
					return (
						<Col key={index}>
							<Card>
								<Card.Img 
									variant="top"
									src={data.img}
									height="150px"
								/>
								<Card.Body>
									<Card.Title>{data.NamaMakanan}</Card.Title>
									<Card.Text>Rp{data.Harga}</Card.Text>
									<Button variant="primary">Pesan Sekarang</Button>
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

export default MenuMakanan;