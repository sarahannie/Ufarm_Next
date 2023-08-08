"use client"
import React from 'react';

const Button = ({name, size, padding, borderRadius}) => {
  return (
    <div>
      <button className='btn btn-outline-light btn-floating' type="button" style={{fontSize: size, padding: padding, borderRadius: borderRadius,  borderColor:'white', fontWeight: 'bold'}} >{name}</button>
    </div>
  )
}

export default Button