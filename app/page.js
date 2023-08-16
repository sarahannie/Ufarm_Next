
import Navbar from '../component/navBar'
import Footer from '../component/footer'
import styles from './page.module.css'
import Testimonal from '../component/testimonal'
import GetStarted from '../component/getstarted'
import Offer from '../component/offer'
import Essential from '../component/essential'
import Featured from '../component/featured'
import FeaturedBrand from '../component/featuredBrand'
import Banner from '../component/header'



export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Banner />
      <FeaturedBrand />
      <Featured />
      <Essential />
      <Offer />
      <Testimonal />
      <GetStarted />
      <Footer />
    </main>
  )
}
