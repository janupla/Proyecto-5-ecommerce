import { useContext } from 'react';
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';
import "./home.css"

export function Home() {
    const userCtx = useContext(UserContext)
    const { user, verifyingToken, authStatus } = userCtx

    return (
        <Container>
            <Container className='carrusel'>
                <h1>{`Bienvenido ${user?.fullName || "sin nombre"}`}</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/1bsCLRF/gameramazon.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/yVkmvWt/mundo-Gamer-bp5-l.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/NKD9LMH/mundogamer3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container className='tarjetas'>
                <h2>LOS MÁS VENDIDOS</h2>
                <Row>
                    <Col>
                        <Card className="card-tarjeta">
                            <Card.Body>
                            <Card.Img variant="top" src="https://i.ibb.co/RpXCGgg/vendido1.png" />
                                <Card.Title>Consola Nintendo Switch OLED Neón</Card.Title>
                                <Card.Text>
                                La nueva consola cuenta con una vibrante pantalla OLED de 7 pulgadas (17.78 cm), un soporte ajustable y amplio, una base con puerto LAN para conexión por cable, almacenamiento interno de 64 GB y audio mejorado.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Img variant="top" src="https://i.ibb.co/31WSwy1/vendido2.png" />
                                <Card.Title>Consola Microsoft Xbox Series S 512GB Reacondicionada</Card.Title>
                                <Card.Text className='card-text'>
                                Capacidad de Almacenamiento: 512 GB  con procesador Zen 2, además de entradas HDMI y núcleos del procesador Octa-Core.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Img variant="top" src="https://i.ibb.co/KWbqXCM/vendido3.png" />
                                <Card.Title>Mundo Gamer</Card.Title>
                                <Card.Text>
                                    Aquí encontrarás accesorios imprescindibles para que tu experiencia gamer sea alucinante. Además de consejos sobre consolas, nuevos lanzamientos y gamers de Twitch favoritos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}





