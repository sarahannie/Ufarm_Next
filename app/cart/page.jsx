import React from 'react';
import '../../public/css/cart.css';
import CardCart from '../../component/microComponent/cardCart'
// import style from './page.module.css'

const page = () => {
    return (
    
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4><b>Shopping Cart</b></h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    3 items
                  </div>
                </div>
              </div>
              <CardCart />
              <CardCart />
              <CardCart />
              
              <div className="back-to-shop">
                <a href="./service">←</a><span className="text-muted">Back to shop</span>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5><b>Summary</b></h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{paddingLeft: '20px'}}>ITEMS 3</div>
                <div className="col text-right">$ 11.00</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">
                    Standard-Delivery- $1.00
                  </option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div className="row" style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)', padding: '2vh 0'}}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">$ 12.00</div>
              </div>
              <button className="btn"> <a href="/payment" className="btn-style">CHECKOUT</a> </button>
            </div>
          </div>
        </div>
        
      );
}

export default page