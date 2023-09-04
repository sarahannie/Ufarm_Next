import React from 'react';


const CardCart = () => {
  return (
    <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img className="img-fluid" src="../images/African Maize.jpg" />
                  </div>
                  <div className="col">
                    <div className="row text-muted">Products</div>
                    <div className="row">sweet Maize</div>
                  </div>
                  <div className="col">
                    <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                  </div>
                  <div className="col">
                    $ 2.00 <span className="close">✕</span>
                  </div>
                </div>
   </div>
  )
}

export default CardCart