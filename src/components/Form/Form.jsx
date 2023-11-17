import { useState } from "react"
import {validation} from "./components/validation/validation"

export default function Form(login){
console.log(login)
    const [userData, setData] = useState({
        email:"",
        password:""
    })

    const handleChange = (evento) =>{
        setData({
            ...userData,
            [evento.target.value]: evento.target.value
        })
    }

    const [errors, setErrors] = useState({})

    setErrors(validation({
        ...errors,
        [evento.target.value]: evento.target.value
    }))

    return(

    <div>
        <form>
        <label>Correo Electrónico</label>
        <input
        type="text"
        name="email"
        onChange={handleChange}
        ></input>
        <label>Contraseña</label>
        <input
        type="text"
        name="password"
        onChange={handleChange}
        ></input>
        <button
        onClick={login}
        >Submit</button>
        </form>
    </div>

    )

    
}