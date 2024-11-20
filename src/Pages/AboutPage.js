import About from '../components/about';
import Guide from '../components/guide';
import NewsLetter from '../components/newsletter';


function AboutPage() {
    return (
 
      <>
      <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">About Us</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">About</li>
      </ol>
    </div>
  </div>
  {/* Header End */}


      <About/>
      <Guide/>
      <NewsLetter/>
      </>
      </>
    );
  }
  
  export default AboutPage;