import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Link} from '@chakra-ui/react';


import styled from 'styled-components';

import { useFormik } from 'formik';

import * as Yup from 'yup';


export const Login1 = () => {

    const {handleChange, handleSubmit}= useFormik ({

        initialValues: {
          email:'',
          contraseña:'',
        },

        validationSchema : Yup.object({
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
          <form onSubmit= {handleSubmit}>
            <StyledFormControl>
              <Heading as='h1'>INICIAR SESION</Heading>

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
              <StyledButton type="submit"> INGRESAR </StyledButton>

              <Text>{' '}
                <Link color='teal.500' href='#'>
                ¿Olvidaste tu Contraseña?
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
  color: white;
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
