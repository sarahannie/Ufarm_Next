import Navbar from '../../component/navBar';
import Footer from '../../component/footer';
import CardService from '../../component/cardService';
import Search from '../../component/search';
const page = () => {
  return (
    <div >
        <Navbar />
        <Search />
        {/* Card start */}
        <div className='mb-5'>
          <div className="container">
            <div className="row">
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
            </div>
          </div>
        </div>
        {/* Card end */}
        <Footer />
    </div>
  )
}

export default page