import { useContext } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import ShoppingCartContext from '../../contexts/ShoppingCart/ShoppingCartContext.jsx'
import './product-view.css';

export const ProductView = ({ product }) => {
    const shoppingCartCtx = useContext(ShoppingCartContext)
    const { addProduct } = shoppingCartCtx //metodo auxiliar q permite agregar productos al carrito
    return (
        <Container fluid style={{ marginTop: 20 }}>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
                    <Image src={product.imageURL} width={500} height={500} fluid >
                    </Image>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Row style={{ gap: 40 }}>
                        <Col className='text-center' xs={12} sm={12} md={12}>{product.title}</Col>
                        <Col className='text-center' xs={12} sm={12} md={12}>{product.description}</Col>
                        <Col className='text-center' xs={12} sm={12} md={12}>{product.price}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: "center" }}>
                        <Button variant="primary" onClick={() => {
                                addProduct(product) //agrega el metodo agregar
                                }}>Agregar
                        </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}