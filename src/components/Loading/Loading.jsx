import React from 'react';
import './Loading.scss'
import { Spinner,Heading} from '@chakra-ui/react'

function Loading() {
    return (
    <>
        <div className='cuerpo_carga'>
            <div className='circle_load bg-dark'>
                <div className="mb-3">
                <Heading size='xl' fontSize='2rem'>EJ <span>ANIME</span></Heading>
                </div>
                <Spinner
                    thickness='8px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.400'
                    size='xl'
                    />
            </div>
        </div>
    </>

  )
}

export default Loading