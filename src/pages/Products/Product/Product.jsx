import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'
import { ProductView } from "../../../components/ProductView/ProductView.jsx"
import axiosClient from "../../../config/axios.jsx"
import UserContext from '../../../contexts/user/UserContext.jsx'

export const Product = () => {
  const userCtx = useContext( UserContext )
  const { user } = userCtx
    const { productId } = useParams()
    // Llamar API para obtener un producto por id (/products/:id)
    const [ product, setProduct ] = useState( {} )
    useEffect( () => {
      const getProductFromDB = async () => {
        const axiosRes = await axiosClient.get( `/products/${ productId }` )
        setProduct( axiosRes.data )
      }
      try {
        getProductFromDB()
      } catch ( error ) {
        console.error( error )
      }
    }, [] )
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>Catálogo de productos de { user?.fullName || "invitado" }</h1>
          </Col>
        </Row>
        <Row>
          <ProductView className="mt-2" product={ product }></ProductView>
        </Row>
      </Container>
    )
  }

  export default Product