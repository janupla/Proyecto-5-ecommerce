import { createContext } from 'react'

const UserContext = createContext()
export default UserContext

//usercontext es una especie de cajita virtual que guarda la info del usuario (token) para que sólo una vez se registre.