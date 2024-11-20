import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Testimonial extends Component {
  render() {
    return (
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
            <h5 className="section-title px-3">Testimonial</h5>
            <h1 className="mb-0">Our Clients Say!!!</h1>
          </div>
          <Row className="testimonial-carousel">
            <Col sm={6} md={4} className="testimonial-item text-center rounded pb-4">
              <Card className="testimonial-comment bg-light rounded p-4">
                <Card.Body>
                  <Card.Text className="text-center mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className="testimonial-img p-1">
                <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle" alt="Image" />
              </div>
              <div style={{ marginTop: '-35px' }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4} className="testimonial-item text-center rounded pb-4">
              <Card className="testimonial-comment bg-light rounded p-4">
                <Card.Body>
                  <Card.Text className="text-center mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className="testimonial-img p-1">
                <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle" alt="Image" />
              </div>
              <div style={{ marginTop: '-35px' }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4} className="testimonial-item text-center rounded pb-4">
              <Card className="testimonial-comment bg-light rounded p-4">
                <Card.Body>
                  <Card.Text className="text-center mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className="testimonial-img p-1">
                <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle" alt="Image" />
              </div>
              <div style={{ marginTop: '-35px' }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4} className="testimonial-item text-center rounded pb-4">
              <Card className="testimonial-comment bg-light rounded p-4">
                <Card.Body>
                  <Card.Text className="text-center mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className="testimonial-img p-1">
                <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle" alt="Image" />
              </div>
              <div style={{ marginTop: '-35px' }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Testimonial;
