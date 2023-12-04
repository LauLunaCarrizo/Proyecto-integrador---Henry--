
export function validation(inputs){
 const regexEmail = /\S+@\S+\.\S+/;
 const regexPassword = new RegExp("[0-9]")
    let errors={}
    //* EMAIL
    if (!inputs.email.length) errors.email = 'Ingrese un correo electrónico';
    if(!regexEmail.test(inputs.email)) errors.email = 'Ingrese un correo electrónico valido'
    if(inputs.email.length > 35) errors.email = 'Email menor a 35 caracteres'
    //*PASSWORD
    if (!inputs.password.length) errors.password = 'Ingrese su contraseña';
    if(!regexPassword.test(inputs.password)) errors.password = "Debe temer al menos un numero"
    if(inputs.password.length < 6) errors.password = "su contraseña debe tener al menos 6 caracteres"
    if(inputs.password.length > 10) errors.password = "su contraseña debe tener maximo 10 caracteres"
    return errors
}
