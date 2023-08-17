import React from 'react';
import style from './cardService.module.css';
import Image from 'next/image';

const CardService = () => {
  return (
        <div className={`card mx-auto col-md-3 col-lg-4 col-10 mt-5 ${style.card}`}>
                <Image className={`mx-auto  ${style.imgThumbnail}`} src="/images/African Maize.jpg" alt='products' width={120} height={150} />
                <div className={`card-body text-center mx-auto`}>
                  <div className="cvp">
                    <h5 className="card-title font-weight-bold">Sweet Maize</h5>
                    <p className="card-text">$2</p>
                    <div className={style.btnFlex}>
                      <a href="#" className={`btn details px-auto ${style.details}`}>AddCart</a>
                      <a href="#" className={`btn det px-4 ${style.det}`}>View</a>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default CardService