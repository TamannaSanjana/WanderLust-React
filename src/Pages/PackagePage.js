import Package from '../components/package';
import Booking from '../components/booking';
import NewsLetter from '../components/newsletter';

function ServicesPage() {
    return (
 
      <>
      <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Travel Packages</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Packages</li>
      </ol>
    </div>
  </div>
  {/* Header End */}






      <Package/>
      <Booking/>
      <NewsLetter/>
      </>
      </>
    );
  }
  
  export default ServicesPage;