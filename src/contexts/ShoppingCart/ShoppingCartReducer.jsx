import { useReducer } from 'react';

const SHOPPING_CART_LS_KEY = 'shoppingCart'

const shoppingCartReducer = (globalState, action) => {
    const { type, payload } = action //acciones , ojo c los cambios para q no se disparen tantas veces estas acciones
    switch (type) {
        case "AGREGAR_PRODUCTO":
            const { product } = payload //extrae del payload el producto agregar
            let productsUpdated
            if (globalState.products) productsUpdated = [...globalState.products] //luego copia c los 3 puntitos el E°
            else productsUpdated = []
            const productIndex = productsUpdated.findIndex(item => item._id === product._id) //al usar los puntos lo hago por valor para q no se altere products updater
            if (productIndex < 0) {
                productsUpdated.push({
                    ...product,
                    quantity: 1
                })
                localStorage.setItem(SHOPPING_CART_LS_KEY, JSON.stringify(productsUpdated))
                return {
                    ...globalState,            //retorna un nuevo objeto 
                    products: productsUpdated
                }
            }
            const oldProduct = { ...globalState.products[productIndex] }
            productsUpdated[productIndex] = { ...oldProduct, quantity: oldProduct.quantity + 1 } //nuevamente crea objeto por valor y no por referencia, no modifica el otro.
            localStorage.setItem(SHOPPING_CART_LS_KEY, JSON.stringify(productsUpdated))
            return {
                ...globalState,
                products: productsUpdated  
            }

        case "QUITAR_PRODUCTO":
            const { productId } = payload
            const productsFiltered = globalState.products.filter(product => product._id !== productId) //filtra los productos 
            localStorage.setItem(SHOPPING_CART_LS_KEY, JSON.stringify(productsFiltered))
            return {
                ...globalState,
                products: productsFiltered
            }

        case "OBTENER_PRODUCTS":
            const productsFromStorage = localStorage.getItem(SHOPPING_CART_LS_KEY) 
            if (!productsFromStorage) {
                localStorage.setItem(SHOPPING_CART_LS_KEY, JSON.stringify([]))
                return {
                    ...globalState,
                    products: []
                }
            }
            const productsParsed = JSON.parse(productsFromStorage) // se transforma de un string a un array
            return {
                ...globalState,
                products: productsParsed
            }
        default:
            return globalState
    }
}

export function useShoppingCartReducer(initialState) {       
    return useReducer(shoppingCartReducer, initialState)
}

