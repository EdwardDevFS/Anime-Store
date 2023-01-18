import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    MinusIcon,
    AddIcon
  } from '@chakra-ui/react'

export default function Carrito(props) {
  return (
      <>
<button 
            className={props.clase}    
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasRight" 
            aria-controls="offcanvasRight">
                {props.children}
          </button>
          <div 
              className="offcanvas offcanvas-end text-bg-dark" 
              tabIndex="-1" 
              id="offcanvasRight" 
              aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">Cartera de articulos</h5>
                  <button 
                      type="button" 
                      className="btn-close btn-close-white" 
                      data-bs-dismiss="offcanvas" 
                      aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
              ...
              </div>
          </div>
      </>
  )
  }
