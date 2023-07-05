const userReducers = (globalState, action) => { //operaciones encargadas asociadas al estado que se encargan de actualizarlo, esa es su función
    const { type, payload } = action //acción se puede  ver como evento
    switch (type) {
        case "LOGIN_EXITOSO":
            localStorage.setItem("token", payload.token)
            return {
                ...globalState,
                authStatus: true
            }

        case "REGISTRO_EXITOSO":
            localStorage.setItem("token", payload.token)
            return {                 //el punto punto integra las propiedades de un objeto a otro objeto, 
                ...globalState,        //mantengo el estado global
                authStatus: true       //pero actualizo el estado a true (eso está en userState)
            }

        case "OBTENER_USUARIO":
            return {
                ...globalState,
                authStatus: true,
                user: action.payload
            }

        case "CERRAR_SESION":
            localStorage.removeItem('token')
            return {
                ...globalState,
                user: null,
                authStatus: false
            }

        default:
            return globalState
    }
}

export default userReducers