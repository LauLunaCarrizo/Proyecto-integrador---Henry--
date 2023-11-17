export function validation(inputs){
    let errors={}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let EMAIL = "lautaropp03@outlook.com"
    if (!regexEmail.test(inputs.email) || input.email !== EMAIL) {
        errors.email = 'Ingrese un correo electrónico válido';
     }
    return errors
}