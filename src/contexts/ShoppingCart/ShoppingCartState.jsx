import ShoppingCartContext from './ShoppingCartContext.jsx'
import { useShoppingCartReducer } from './ShoppingCartReducer.jsx'

const ShoppingCartState = (props) => {
    const initialState = {
        products: null
    }

    const [globalState, dispatch] = useShoppingCartReducer(initialState)

    const addProduct = (product) => {
        dispatch({
            type: "AGREGAR_PRODUCTO", //metodos auxiliares
            payload: {
                product // product: product
            }
        })
    }

    const removeProduct = (productId) => {
        dispatch({
            type: "QUITAR_PRODUCTO", //metodos auxiliares
            payload: {
                productId
            }
        })
    }

    const getProducts = () => {
        dispatch({
            type: "OBTENER_PRODUCTOS", //metodos auxiliares
        })
    }

    return (
        <ShoppingCartContext.Provider value={{     
            ...globalState,
            addProduct,           //retorna el provider recibe un value, un objeto q guarda la info de metodos auxiliare sy E° global
            removeProduct,
            getProducts
        }} displayName="ShoppingCartContext"> 
            {
                props.children   
            }
        </ShoppingCartContext.Provider>
    )

}

export default ShoppingCartState //exporta por defecto 