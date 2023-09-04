"use client"
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  style from './essential.module.css';
import Card from './microComponent/card';


const Essential = () => {
  return (
    <div className={'container ' + style.container}>
      <h1 className={`${style.header}`}>Essential Products</h1>
      <Carousel>
        <Carousel.Item>
  
          <div className={'container my-0'}>
              <div className={"row"}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
          </div>
        
        </Carousel.Item>
        <Carousel.Item>
        <div className={'container my-0'}>
              <div className={"row"}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className={'container my-0'}>
              <div className={"row"}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Essential;
