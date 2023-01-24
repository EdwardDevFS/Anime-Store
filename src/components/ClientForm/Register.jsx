import React, { useState } from 'react'
import './Register.scss'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Heading,
  Select,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

const Register = () => {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <div className="todo">
      <Heading className='Title'>LOG<span>IN</span></Heading>
      <Box className='asd'>
        <FormControl isInvalid={isError}>
          <FormLabel>First name</FormLabel>
          <Input placeholder='First name' />
          <FormLabel>Second name</FormLabel>
          <Input placeholder='First name' />
          <FormLabel>Email</FormLabel>
          <Input type='email' value={input} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
          <FormLabel>Country</FormLabel>
          <Select placeholder='Select country'>
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <InputGroup size='md'>
          <Input
            colorScheme="gray"
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' colorScheme="red" variant='outline' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>  
      </Box>
    </div>
  )
}

export default Register