"use client"
import React from 'react';

const Button = ({name, size, padding, borderRadius}) => {
  return (
    <div>
      <button type="button" style={{fontSize: size, padding: padding, borderRadius: borderRadius, backgroundColor: '#10571b', borderColor:'white', fontWeight: 'bold'}} className="btn btn-primary">{name}</button>
    </div>
  )
}

export default Button