import { useState } from "react"
import {validation} from "../../utils/validation"
import { useNavigate } from "react-router-dom"

export default function Form(props){
// console.log(props)
    const [userData, setData] = useState({
        email:"",
        password:""
    })
    const [errors, setErrors] = useState({
        email:"ingrese un email",
        password:"ingrese una contraseña"
    })

    const handleChange = (evento) =>{
        const {name, value} = evento.target
        setData({
            ...userData,
            [name] : value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const func = props
    // console.log(func)
    const handleSubmit = (evento) => {
        evento.preventDefault();
        props.login(userData);
    }

    return(

    <div>
        <form
        onSubmit={handleSubmit}
        >
        <label>Correo Electrónico</label>
        <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="email..."
        ></input>
        <p style={{color:"coral"}}>{errors.email ? errors.email : null}</p>
        <hr />
        <label>Contraseña</label>
        <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="password..."
        ></input>
        <p style={{color:"coral"}}>{errors.password ? errors.password : null}</p>
        <hr />
        <button
        type="submit"
        disabled={errors.email || errors.password}
        >Submit</button>
        </form>
    </div>
    )
}