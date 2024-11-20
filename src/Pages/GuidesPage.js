import Guide from "../components/guide";
import NewsLetter from "../components/newsletter";
function GuidesPage() {
    return (

      <>
<>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Our Travel Guides</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Guides</li>
      </ol>
    </div>
  </div>
  {/* Header End */}

    <Guide/>
    <NewsLetter/>
      </>
      </>
    );
  }
  
  export default GuidesPage;