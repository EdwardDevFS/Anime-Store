import { 
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    FormLabel,
    Input,
    FormControl,
    Checkbox,
    Image} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import './Detalle.scss'
import ButtonMio from '../Buttons/ButtonMio'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Storage/CarContext'



const DetalleCompra = () => {
    const { cart } = useContext(cartContext);

    if(cart.length === 0){
        window.location.href = "http://localhost:3000";
    }

    let asd = cart.map(function(index){
        return index.price * index.count
    })
    let total = asd.reduce((a,e) => a + e)
    let igv = total * 18 / 100;
    let importe =  total - igv;

    function verificar(){

    }

    return (
        <Box className='section-boleta'>
            <Box className='boleta-pago'>
                <Box className='detalle-products'>
                    <Box className='heading-detail'>
                        <Heading className='text-right'>EJ ANIM<span>E STORE</span></Heading>
                        <Heading className='text-left'>Detalle de compra</Heading>
                    </Box>
                    <Box className='body-detail mt-3'>
                        <FormControl className='d-flex mt-4'>
                            <Box className='col-md-4 pe-3'>
                                <FormLabel>Nombres y apellidos:</FormLabel>
                                <Input isReadOnly value="Edward Josue Mamani Mamani" />
                            </Box>
                            <Box className='col-md-4'>
                                <FormLabel>Correo Electrónico</FormLabel>
                                <Input isReadOnly value="Edward_Dev@outlook.com" />
                            </Box>
                            <Box className='col-md-4 ps-3'>
                                <FormLabel>Número de teléfono</FormLabel>
                                <Input isReadOnly value="+51 916644383" />
                            </Box>
                        </FormControl>
                            <FormControl className="mb-4">
                                <FormLabel className="mt-2">Dirección para envio</FormLabel>
                                <Input type='email' />
                            </FormControl>
                        <Box>
                        </Box>
                    <Heading>Detalle de producto</Heading>

                    <Table variant='striped' colorScheme='blackAlpha'>
                        <Thead>
                            <Tr>
                                <Th className='text-center'>Articulo</Th>
                                <Th className='text-center'>Descripción</Th>
                                <Th className='text-center'>Precio Unitario</Th>
                                <Th className='text-center'>Cantidad</Th>
                                <Th className='text-center'>Total</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {cart.map((data,i)=>(
                            <Tr key={i}>
                                <Td><Image
                                    objectFit='cover'
                                    src={data.url}
                                    alt={data.alt}
                                    visibility="visible"
                                /></Td>
                                <Td className='text-center'>{data.desc || data.sinopsis}</Td>
                                <Td className='text-center'>S/ {data.price}</Td>
                                <Td className='text-center'>{data.count}</Td>
                                <Td className='px-3'>S/ {data.price * data.count}</Td>
                            </Tr>
                                ))}
                        </Tbody>
                    </Table>
                        <Box className='footer_table'>
                            <FormControl className='footer_detail_sale'>
                                <Box className='detail_caption text-center'>
                                    <FormLabel><span className='text-center'>Valor venta</span></FormLabel>
                                    <FormLabel><span className='text-center'>IGV/IVA 18%</span></FormLabel>
                                    <FormLabel><span className='text-center'>Importe total</span></FormLabel>
                                </Box>
                                <Box className='price_caption'>
                                    <FormLabel className='text-center price'>S/{importe}</FormLabel>
                                    <FormLabel className='text-center price'>S/{igv}</FormLabel>
                                    <FormLabel className='text-center price'>S/{total}</FormLabel>
                                </Box>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box className='footer_detail'>
                        <Checkbox colorScheme='green' defaultChecked>Acepto los <Link>Terminos y Condiciones.</Link></Checkbox>
                        <ButtonMio  Tipo="btn btn-success float-end">¡Hagamoslo!</ButtonMio>
                    </Box>
                </Box>
            </Box>
        </Box>
  )
}

export default DetalleCompra