import React from 'react'
import CarritoDetail from './CarritoDetail'

export default function Slide(props) {
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
                <h5 className="offcanvas-title ps-2" id="offcanvasRightLabel">CARTERA D<span>E PRODUCTOS</span></h5>
                <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    data-bs-dismiss="offcanvas" 
                    aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <CarritoDetail></CarritoDetail>
            </div>
        </div>
    </>
)
}
