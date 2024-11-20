import Destination from '../components/destination';
import NewsLetter from '../components/newsletter';

function DestinationPage() {
    return (
 
      <>

<>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Travel Destination</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Destination</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
</>



      <Destination/>
      <NewsLetter/>
      </>
   
    );
  }
  
  export default DestinationPage;