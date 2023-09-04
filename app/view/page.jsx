"use client"
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CardImg from '../../component/microComponent/CardImg';

const page = () => {
  return (
    <div>
        <div>
            <Image src="/images/African Maize.jpg" alt='Product_img' width={100} height={100} />
        </div>
        <div>
          <Carousel>
            <Carousel.Item>
                <CardImg />
            </Carousel.Item>
          </Carousel>
        </div>
    </div>
  )
}

export default page