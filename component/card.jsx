import React from 'react';
import style from './card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { faCartShopping, faHeart, faRandom, faSearch, faStar,  faStarHalf } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div className={`col-md-3 col-sm-6 mr-5 ${style.product}`}>
              <div className={` ${style.productGrid }` }>
                <div className={` ${style.productImage}`}>
                  <a href="#" className={` ${style.image}`}>
                    <Image className={`${style.pic1}`} width={300} height={300} src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt='Product_cart' />
                    <Image className={`${style.pic2}`} width={400} height={300} src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt='Product_cart' />
                  </a>
                  <a href="#" className={` ${style.productIikeIcon}`} data-tip="Add to Wishlist">
                  <FontAwesomeIcon style={{fontSize:'20px'}} icon={faHeart} />
                  </a>
                  <ul className={` ${style.productLinks}`}>
                    <li><a href="#"><FontAwesomeIcon style={{fontSize:'20px'}} icon={faSearch} /></a></li>
                    <li><a href="#"><FontAwesomeIcon style={{fontSize:'20px'}} icon={faCartShopping} /></a></li>
                    <li><a href="#"><FontAwesomeIcon style={{fontSize:'20px'}} icon={faRandom} /></a></li>
                  </ul>
                </div>
                <div className={` ${style.productContent}`}>
                  <div className={`d-flex justify-content-between`}>
                    <div>
                    <h3 className={` ${style.title}`}><a href="#">Womens Top</a></h3>
                    <div className={` ${style.price}`}>\$75.99</div>
                    </div>
                    <div>
                    <ul className={`${style.rating}`}>
                    <FontAwesomeIcon style={{fontSize:'13px'}} icon={faStar} />
                    <FontAwesomeIcon style={{fontSize:'13px'}} icon={faStar} />
                    <FontAwesomeIcon style={{fontSize:'13px'}} icon={faStar} />
                    <FontAwesomeIcon style={{fontSize:'13px'}} icon={faStar} />
                    <FontAwesomeIcon style={{fontSize:'13px'}} icon={faStar} />
                </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Card