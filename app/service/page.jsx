import Navbar from '../../component/navBar';
import Footer from '../../component/footer';
import CardService from '../../component/cardService';
import Search from '../../component/search';
const page = () => {
  return (
    <div>
        <Navbar />
             {/* Searchbar start */}
        <Search />
        {/* Searchbar End */}
        {/* Card start */}
        <div className="bg1">
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