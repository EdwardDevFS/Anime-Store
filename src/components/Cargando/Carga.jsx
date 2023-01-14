import React from 'react'
import './Carga.scss'
import { Spinner,Heading, Skeleton, SkeletonCircle, SkeletonText  } from '@chakra-ui/react'


function Carga() {

    return (
    <>
        <div className="skeleton_carga">
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
            <Skeleton height='2.20em'>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>
        </div>
        <div className='cuerpo_carga'>
            
            <div className='circle_load bg-dark'>
                <div className="mb-3">
                <Heading size='lg' fontSize='2rem'>EJ <span>ANIME</span></Heading>
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

export default Carga