import Navbar from '../../component/navBar';
import Footer from '../../component/footer';
import '../../public/css/service.css';
import CardService from '../../component/cardService';
const page = () => {
  return (
    <div>
        <Navbar />
             {/* Searchbar start */}
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="search">
                <i className="fa fa-search" />
                <input type="text" className="form-control" placeholder="Search For Products" />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
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