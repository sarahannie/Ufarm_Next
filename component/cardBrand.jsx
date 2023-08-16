import React from 'react';
import Image from 'next/image';
import style from './cardBrand.module.css';

const CardBrand = () => {
  return (
    <div className={`col-md-3 col-sm-6 mr-5 ${style.product}`}>
                    <div className={` ${style.productGrid }` }>
                <div className={` ${style.productImage}`}>
                  <a href="#" className={` ${style.image}`}>
                    <Image  width={200} height={200} className={` ${style.img}`} src="/images/log.png" alt='Product_cart' />
                  </a>
                  
                </div>
                <div className={` ${style.productContent}`}>
                  <div className={` justify-content-center`}>
                    <h3 className={` ${style.title}`}>MOMO</h3>
                    <div className={` ${style.description}`}>For products that is more than one get free deliver</div>
                  </div>
                </div>
              </div>
   </div>
  )
}

export default CardBrand