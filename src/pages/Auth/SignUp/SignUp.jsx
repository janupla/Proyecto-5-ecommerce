import { useContext, useState } from 'react';
import UserContext from "../../../contexts/user/UserContext.jsx";
import './signup.css';


export const SignUp = () => {
    const userCtx = useContext(UserContext)
    const { registerUser } = userCtx
    const [formValues, setFormValues] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(formValues)
        await registerUser(formValues)
        
    }

    async function handleFormChange(event) {
        const { target } = event
        const { name, value } = target
        const newValues = { ...formValues, [name]: value }
        setFormValues(newValues)
    }

    return (
        <div className='div-signup'>
            <h1>Registro</h1>
            <form className='form-signup' onSubmit={handleSubmit}>
                <label className='label-signup' htmlFor='name'>Nombre</label>
                <input className='input-signup' id="name" name='name' type='text' value={formValues.name} onChange={handleFormChange}></input>

                <label htmlFor='surname'>Apellido</label>
                <input id="surname" name='surname' type='text' value={formValues.surname} onChange={handleFormChange}></input>

                <label htmlFor='email'>Correo</label>
                <input id="email" name='email' type='email' value={formValues.email} onChange={handleFormChange}></input>

                <label htmlFor='password'>Contraseña</label>
                <input id="password" name='password' type='password' value={formValues.password} onChange={handleFormChange}></input>

                <button className='button-signup' type='submit'>Registrarse</button>
            </form>
        </div>
    )

}