import React from "react";

class Carosel extends React.Component {
  state = {};
  render() {
    return (
      <>
<>
          {/* Carousel Start */}
          <div className="carousel-header">
            <div
              id="carouselId"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="30000" // Automatically slides every 30 seconds
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carouselId"
                  data-bs-slide-to={0}
                  className="active"
                />
                <li data-bs-target="#carouselId" data-bs-slide-to={1} />
                <li data-bs-target="#carouselId" data-bs-slide-to={2} />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item">
                  <img src="img/carousel-2.jpg" className="img-fluid" alt="Image" />
                  <div className="carousel-caption">
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4
                        className="text-white text-uppercase fw-bold mb-4"
                        style={{ letterSpacing: 3 }}
                      >
                        Explore The World
                      </h4>
                      <h1 className="display-2 text-capitalize text-white mb-4">
                        Let's The World Together!
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <img src="img/carousel-3.jpg" className="img-fluid" alt="Image" />
                  <div className="carousel-caption">
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4
                        className="text-white text-uppercase fw-bold mb-4"
                        style={{ letterSpacing: 3 }}
                      >
                        Explore The World
                      </h4>
                      <h1 className="display-2 text-capitalize text-white mb-4">
                        Let's The World Together!
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="img/carousel-1.jpg" className="img-fluid" alt="Image" />
                  <div className="carousel-caption">
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4
                        className="text-white text-uppercase fw-bold mb-4"
                        style={{ letterSpacing: 3 }}
                      >
                        Explore The World
                      </h4>
                      <h1 className="display-2 text-capitalize text-white mb-4">
                        Let's The World Together!
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="carousel-item">
                  <img src="img/carousel-1.jpg" className="img-fluid" alt="Image" />
                  <div className="carousel-caption">
                    
                    <h4
                        className="text-white text-uppercase fw-bold mb-4"
                        style={{ letterSpacing: 3 }}
                      >
                        Find Your Perfect Tour At Travel
                      </h4>
                      <h1 className="display-2 text-capitalize text-white mb-4">
                        Let's The World Together!
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="img/carousel-3.jpg" className="img-fluid" alt="Image" />
                  <div className="carousel-caption">
                    <h1>You Like to Go?</h1>
                  </div>
                </div> */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>
          <div
  className="container-fluid search-bar position-relative"
  style={{ top: "-50%", transform: "translateY(-50%)" }}
>
  <div className="container">
    <div
      className="position-relative rounded-pill w-100 mx-auto p-5"
      style={{ background: "rgba(19, 53, 123, 0.8)" }}
    >
      <input
        className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
        type="text"
        placeholder="Eg: Thailand"
      />
      <button
        type="button"
        className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2"
        style={{ top: "50%", right: 46, transform: "translateY(-50%)" }}
      >
        Search
      </button>
    </div>
  </div>
        </div>
</>

      </>
    );
  }
}

export default Carosel;