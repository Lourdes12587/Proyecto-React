import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Link
} from '@chakra-ui/react'
import styled from 'styled-components'
import {useFormik} from 'formik'

import * as Yup from 'yup'


export const Register = () => {

    const {handleChange, handleSubmit}= useFormik ({

      initialValues: {
        nombre:'',
        email:'',
        contraseña:'',
      },

      validationSchema : Yup.object({
        nombre: Yup.string().required('Campo requerido'),
        email: Yup.string().required('Campo requerido'),
        contraseña: Yup.string()
        .min(6,'Minimo de caracteres:6')
        .required('Campo requerido')
      }),
  
      onSubmit: (formdata)=>{
        console.log(formdata);
      },
   
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledFormControl >
          <Heading as='h2'>REGISTRATE</Heading>
          <FormField>
            <FormLabel>Nombre Completo:</FormLabel>
            <StyledInput 
            type='text'
            name='name'
            placeholder='Ingresa Nombre Completo'
            onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Email:</FormLabel>
            <StyledInput 
            type='email'
            name='email' 
            onChange={handleChange}
            placeholder='Ingresa tu Email'

            />
          </FormField>

          <FormField>
            <FormLabel>Contraseña:</FormLabel>
            <StyledInput 
            type='password'
            name='contraseña' 
            onChange={handleChange}
            placeholder='Ingresa tu Contraseña'
            />
            </FormField>
          <StyledButton type="submit"> REGISTRATE </StyledButton>

          <Text> ¿Ya tenes una cuenta?{' '}
            <Link color='teal.500' href='#'>
                Inicia Sesion
            </Link>
            </Text>
      </StyledFormControl>
    </form>
    </>
  )
}

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 75vh;
`

const StyledInput = styled(Input)`
  padding: 15px 35px 15px 15px;
  background-color: #2d3640;
  color: #fff;
  outline: none;
  border: none;
  width: 350px;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`

const StyledButton = styled(Button)`
  font-size: 0.9rem;
  background: linear-gradient(90deg, #584c99, #0f0b8e);
  color: white;
  transition: all 0.3s ease;
  padding: 10px 20px;
  cursor: pointer;
`
      
