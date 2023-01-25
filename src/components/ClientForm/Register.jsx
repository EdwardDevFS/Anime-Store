import React, { useState } from 'react'
import './Register.scss'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Button,
  Checkbox
} from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { Link } from 'react-router-dom'
import ButtonMio from '../Buttons/ButtonMio'

const Register = () => {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleInputChange = (e) => setInput(e.target.value)


  return (
    <div className="todo">
      <Box className='asd'>
      <Heading className='Title'>REGI<span>STER</span></Heading>
        <FormControl >
          <FormLabel >Nombres</FormLabel>
          <Input  placeholder='Ingrese su nombre' isRequired/>
          <FormLabel className='mt-2'>Apellidos</FormLabel>
          <Input placeholder='Ingrese su apellido' />
          <FormLabel className='mt-2'>Correo Electrónico</FormLabel>
          <Input type='email' value={input} placeholder='Ingrese su correo electrónico' onChange={handleInputChange} />
          <FormLabel className='mt-2'>Número de teléfono</FormLabel>
          <InputGroup>
            <InputLeftAddon backgroundColor="black" borderColor='' children='+any' />
            <Input type='tel'   placeholder='Número de teléfono' />
          </InputGroup>
          <FormLabel className='mt-2'>Contraseña:</FormLabel>
          <InputGroup className='mt-1' size='md'>
          <Input
            colorScheme="gray"
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Ingrese su contraseña'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' colorScheme="green" variant='outline' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>

          </InputRightElement>
        </InputGroup>
        <Box className='Footer_form'>
          <Checkbox colorScheme='green' defaultChecked>Acepto los <Link>Terminos y Condiciones.</Link></Checkbox>
        </Box>
          <ButtonMio  uttonMio Tipo="btn btn-outline-success float-end py-2 px-3 etc">Enviar datos</ButtonMio>
        </FormControl>  
      </Box>
    </div>
  )
}

export default Register