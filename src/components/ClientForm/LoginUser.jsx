import React from 'react'
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import './Login.scss'
import ButtonMio from '../Buttons/ButtonMio'

const LoginUser = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box className="todo-container">
      <Box className='bg-container'>
        <Box className='LoginForm'>
          <Box>
            <Heading className='text-center Login-title'>INGR<span>ESAR</span></Heading>
          </Box>
          <Box className='body-form'>
            <FormControl>
              <FormLabel>Correo electrónico</FormLabel>
              <Input  size='lg' variant='flushed' placeholder='Tu correo electrónico' />
              <FormLabel className='mt-4'>Contraseña</FormLabel>
              <InputGroup  size='lg'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Ingrese su contraseña'
                  variant='flushed'
                />
                <InputRightElement width='4.5rem'>
                  <Button variant='outline' colorScheme='red'  h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Checkbox colorScheme='green'  className='Checkbutton-form' size="lg" defaultChecked>Recordar Contraseña</Checkbox>

              <ButtonMio Tipo="btn text-bg-dark Login-Buttom float-end">Ingresar</ButtonMio>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginUser