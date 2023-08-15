
import React from 'react';

const Button = ({name, size, padding, borderRadius, borderColor, color ,onMouseEnter,onMouseLeave, boxStyle}) => {
  return (
    <div>
      <button className='btn btn-outline-light btn-floating' type="button" style={{...boxStyle,fontSize: size, padding: padding, borderRadius: borderRadius,  borderColor: borderColor, fontWeight: 'bold'  }}  onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave} >{name}</button>
    </div>
  )
}

export default Button