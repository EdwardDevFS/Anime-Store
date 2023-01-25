import { Box,
     Heading,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption, 
     FormLabel,
     Input,
     FormHelperText,
     FormControl,
     Checkbox} from '@chakra-ui/react'
import React from 'react'
import './Boleta.scss'
import ButtonMio from '../Buttons/ButtonMio'
import { Link } from 'react-router-dom'
const DetalleCompra = () => {


  return (
    <Box className='section-boleta'>
        <Box className='boleta-pago'>
            <Box className='detalle-products'>
                <Box className='heading-detail'>
                    <Heading className='text-right'>EJ ANIM<span>E STORE</span></Heading>
                    <Heading className='text-left'>Detalle de compra</Heading>
                </Box>
                <Box className='body-detail'>
                    <FormControl className='d-flex mt-4'>
                        <Box className='col-md-7'>
                            <FormLabel>Nombres y apellidos:</FormLabel>
                            <Input isReadOnly value="Edward Josue Mamani Mamani" />
                        </Box>
                        <Box className='col-md-5'>
                            <FormLabel>Número de teléfono</FormLabel>
                            <Input isReadOnly value="+51 916644383" />
                        </Box>
                    </FormControl>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                    <Box>
                    </Box>
                <Heading>Detalle de producto</Heading>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
                </Box>
                <Box className='footer-detail'>
                    <Checkbox colorScheme='green' defaultChecked>Acepto los <Link>Terminos y Condiciones.</Link></Checkbox>
                    <ButtonMio Tipo="btn btn-success">¡Hagamoslo!</ButtonMio>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default DetalleCompra