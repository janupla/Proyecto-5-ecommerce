import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx'
import axiosClient from "../../config/axios.jsx";
import UserContext from '../../contexts/user/UserContext.jsx'

export const Products = () => {
    const userCtx = useContext( UserContext )
    const { user } = userCtx
    //llama a la api para ver productos (/products)
    const [ products, setProducts ] = useState( [] )
    useEffect( () => {
      const getProductsFromDB = async () => {
        const axiosRes = await axiosClient.get( '/products' )
        setProducts( axiosRes.data )
      }
      try {
        getProductsFromDB()
      } catch ( error ) {
        console.error( error )
        alert( error.message )
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
          { products.map( product => {
            return <Col key={ product._id }>
              <ProductCard product={ product } productViewPath={ `/products/${ product._id }` }></ProductCard>
            </Col>
          } )
          }
        </Row>
      </Container>
  
    )
  }

export default Products