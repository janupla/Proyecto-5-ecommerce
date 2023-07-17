import { useContext } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';
import "./home.css"

export function Home() {
    const userCtx = useContext(UserContext)
    const { user, verifyingToken, authStatus } = userCtx

    return (
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
    )}


