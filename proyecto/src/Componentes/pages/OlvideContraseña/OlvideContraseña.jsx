import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
  } from '@chakra-ui/react';
  
  import styled from 'styled-components';
  
  import { useFormik } from 'formik';
  
  import * as Yup from 'yup';
  
  
  export const OlvideContraseña = () => {
  
      const {handleChange, handleSubmit}= useFormik ({
  
          initialValues: {
            email:'',
          },
  
          validationSchema : Yup.object({
              email: Yup.string().required('Campo requerido'),
          }),
  
          onSubmit: (formdata)=>{
            console.log(formdata);
          },
       
        });
  
    return (
      <>
          <form onSubmit= {handleSubmit}>
            <StyledFormControl >
              <Heading as='h1'>OLVIDASTE TU CONTRASEÑA</Heading>
  
              <FormField>
                <FormLabel>Ingresa tu Correo Electronico para reestrablecer tu contraseña.</FormLabel>
                <StyledInput 
                type='email'
                name='email'
                onChange={handleChange}
                placeholder='Email de Recuperacion'
                />
              </FormField>

              <StyledButton type="submit"> INGRESAR </StyledButton>
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