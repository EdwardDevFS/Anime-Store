import React, { useContext } from 'react'
import { cartContext } from '../../Storage/CarContext'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Badge,
    Image,
    FormControl,
    FormLabel,
    Heading,
    Button,
    } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import './Carrito.scss'
import ButtonMio from '../Buttons/ButtonMio'
import { Link } from 'react-router-dom'


const handleClick = (params) =>{
  console.log("hola amigos,", params)
}

const CarritoDetail = () => {

  const { cart } = useContext(cartContext);

  return (
    <Accordion allowMultiple>
    {cart.map((data,i)=>(  
      <AccordionItem key={i} pb={2}>
      {({ isExpanded }) => (
        <>
          <AccordionButton display={isExpanded ? 'none': 'block'} >
            <Box as="span"  display='flex' alignItems='center' justifyContent="spaceBetween" >
              <Image
                  objectFit='cover'
                  src={data.url}
                  alt={data.alt}
                  visibility="visible"
              />
              <div className='Titulo'>{data.title}</div>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
                ) : (
                <AddIcon fontSize='12px' />
                  )}
            </Box>
          </AccordionButton>
            <AccordionPanel pb={4}>
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                <Box>
                  <Image src={data.url} alt={data.alt} />
                  <Button onClick={handleClick.bind(null,data)}>Eliminar</Button>
                </Box>
    
                <Box p={6}>
                  <Box display='flex' alignItems='baseline' >
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      Nuevo
                    </Badge>
                    <AccordionButton>
                      <MinusIcon fontSize='12px' />
                    </AccordionButton>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='bold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {data.title}
                  </Box>

                  <Box fontWeight='semibold' as='h5'>
                    Precio unitario:
                    S/{data.price} soles

                  </Box>
                  <Box display='flex'>
                  <FormControl display='flex' flexDirection='column' textAlign='left'>
                    <FormLabel><span >Cantidad:</span></FormLabel>
                    <Heading>{data.count}</Heading>
                  </FormControl>
                  <FormControl display='flex' flexDirection='column' textAlign='left'>
                    <FormLabel><span>Precio Total:</span></FormLabel>
                    <Heading>S/{data.count*data.price}</Heading>
                  </FormControl>
                  </Box>
                </Box>
              </Box>
            </AccordionPanel>
        </>
          )}
      </AccordionItem>

))} 
    <div className="botones">
      <Link to="/register">
        <ButtonMio 
          Tipo="btn btn-outline-warning button_asd_1" 
          >
          Register
        </ButtonMio>
      </Link>
      <Link to="/prueba">
        <ButtonMio Tipo="btn btn-outline-success button_asd">Finalizar compra</ButtonMio>
      </Link>
    </div>
    </Accordion>
  )
}

export default CarritoDetail