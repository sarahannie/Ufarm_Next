import React from 'react';
import style from './featuredBrand.module.css';
import CardBrand from './microComponent/cardBrand';


const FeaturedBrand = () => {
  return (
    <div className={'container ' + style.container}>
        <h1 className={`${style.header}`}>Featured Brands</h1>
        <div className={`container my-0 ${style.contain}`}>
                <div className={"row"}>
                    <CardBrand />
                    <CardBrand />
                    <CardBrand />
                    
                </div>
        </div>
    </div>
  )
}

export default FeaturedBrand