
import Navbar from '../component/navBar'
import Footer from '../component/footer'
import styles from './page.module.css'
import Testimonal from '../component/testimonal'
import GetStarted from '../component/getstarted'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div>
        {/* navbar start*/}
        <div w3-include-html="../includes/navbar.html" />{/* navbar end*/}
        {/* Carousel section start*/}
        <div className="carousel slide" id="carouselExampleSlidesOnly" data-mdb-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active"><img className="d-block w-100" src="../images/carousel1.jpg" alt="Wild Landscape" />
              <div className="carousel-content">
                <p className="next">Next Level Technology</p>
                <p className="Buy">Buy, Sell and Trade Products</p>
                <p className="started">Get Started With Us</p><a className="btn btn-light" type="button" data-mdb-ripple-color="dark" href="/signup">Signup</a>
              </div>
            </div>
            <div className="carousel-item"><img className="d-block w-100" src="../images/rec.png" alt="Camera" />
              <div className="carousel-content">
                <p className="next">Best Agricultural Products</p>
                <p className="Buy">Let Go Green Again</p>
                <p className="started">We Give Quality,Quantity <br /> and Best Products When It Comes To Agriculture</p><a className="btn btn-light" type="button" data-mdb-ripple-color="dark" href="/signup">Signup</a>
              </div>
            </div>
          </div>
        </div>{/* Carousel section end*/}
        {/* What is new section start*/}
        <div className="bg">
          <div className="new">What's New</div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 cards-new">
                <div className="card" style={{width: '18rem'}}><img className="card-img-top" src="../images/airtelmoney.jpg" alt="Sunset Over the Sea" />
                  <div className="card-body">
                    <p className="card-text">Easy Payment With Airtime</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 cards-new">
                <div className="card" style={{width: '18rem'}}><img className="card-img-top" src="../images/chat.jpg" alt="Sunset Over the Sea" />
                  <div className="card-body">
                    <p className="card-text">Chat Buyers and Sellers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 cards-new">
                <div className="card" style={{width: '18rem'}}><img className="card-img-top" src="../images/shopping.jpg" alt="Sunset Over the Sea" />
                  <div className="card-body">
                    <p className="card-text">Shopping Made Easier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* What is new section end*/}
        {/* How to get started start*/}
        <div className="bg1">
          <div className="new">How To Get Started</div>
          <div><img className="img-starter" src="../images/2.png" width="75%" height="50%" alt="" /></div>
        </div>{/* How to get started end*/}

      </div>
      <Testimonal />
      <GetStarted />
      <Footer />
    </main>
  )
}
