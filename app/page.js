
import Navbar from '../component/navBar'
import Footer from '../component/footer'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1> Hello World</h1>
      <h1> Hello World</h1>
      <h1> Hello World</h1>
      <h1> Hello World</h1>
      <Footer />
    </main>
  )
}
