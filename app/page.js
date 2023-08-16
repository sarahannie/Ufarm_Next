
import Navbar from '../component/navBar'
import Footer from '../component/footer'
import styles from './page.module.css'
import Testimonal from '../component/testimonal'
import GetStarted from '../component/getstarted'
import Offer from '../component/offer'
import Essential from '../component/essential'
import Featured from '../component/featured'


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
      </div>
      <Featured />
      <Essential />
      <Offer />
      <Testimonal />
      <GetStarted />
      <Footer />
    </main>
  )
}
