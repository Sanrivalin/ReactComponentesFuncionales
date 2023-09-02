import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSignUp ({handleSubmit}) {
    // const {handleSubmit} = props;
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [promo,setPromo] = useState(true)
    const [nov,setNov] = useState(true)

    const [errors,setErrors] = useState({
        name:{
        error:false,
        message:'Deben ser almenos tres caracteres',
        },
        lastName:{
            error:false,
            message:'Deben ser almenos 4 caracteres',
        }
    })

    const validarNombre = (nombre) => {
        if(nombre.length >= 3){
            return {
                name:{error:false, message:''}
            }
        }else {
            return {
                name:{error:true, message:'Deben ser almenos tres caracteres'}
            } 
        }

    }

    const validarApellido = (apellido) => {
        if(apellido.length >= 4){
            return {
                lastName:{error:false, message:''}
            }
        }else {
            return {
                lastName:{error:true, message:'Deben ser almenos cuatro caracteres'}
            } 
        }

    }
    
    return (<form onSubmit={(element) => {
        element.preventDefault()
        handleSubmit({name,lastName,email,promo,nov})
    }}>
        <TextField id="name" label="Name" variant="outlined" fullWidth margin='normal' onChange={(element)=>{
            // console.log(element.target.value)
            setName(element.target.value)}} value={name} error={errors.name.error} helperText={errors.name.error?errors.name.message:''} onBlur={(element)=>{
            // console.log(element.target.value)
            setErrors( validarNombre(element.target.value))
        }} />

        <TextField id="lastName" label="Apellidos" variant="outlined" fullWidth margin='normal' onChange={(element)=>{ setLastName(element.target.value)}} value={lastName} error={errors.lastName.error} helperText={errors.lastName.error?errors.lastName.message:''} onBlur={(element)=>{
            setErrors( validarApellido(element.target.value))
        }} />

        <TextField id="email" label="Correo" variant="outlined" fullWidth margin='normal' value={email} onChange={(element)=> setEmail(element.target.value) } />

        
        <FormGroup>
        <FormControlLabel control={<Switch checked={promo} onChange={(element) => {
            setPromo(element.target.checked)
            // console.log(element.target.checked)
        }} />} label="Promociones" />
        <FormControlLabel control={<Switch checked={nov} onChange={(element) => {
            setNov(element.target.checked)
        }} />} label="Novedades" />
        </FormGroup>      
        <Button variant="contained" type='submit'>Registrarse</Button>
        </form>)
}

export default FormSignUp