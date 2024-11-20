import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Packages extends Component {
  render() {
    const packages = [
      {
        img: "img/packages-4.jpg",
        location: "Venice - Italy",
        duration: "3 days",
        people: "2 Person",
        price: "$349.00",
        title: "Venice - Italy",
        subtitle: "Hotel Deals",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
      },
      {
        img: "img/packages-2.jpg",
        location: "The New California",
        duration: "3 days",
        people: "2 Person",
        price: "$449.00",
        title: "The New California",
        subtitle: "Hotel Deals",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
      },
      {
        img: "img/packages-3.jpg",
        location: "Discover Japan",
        duration: "3 days",
        people: "2 Person",
        price: "$549.00",
        title: "Discover Japan",
        subtitle: "Hotel Deals",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
      },
      {
        img: "img/packages-1.jpg",
        location: "Thailand",
        duration: "3 days",
        people: "2 Person",
        price: "$649.00",
        title: "Thailand Trip",
        subtitle: "Hotel Deals",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
      },
    ];

    return (
      <div className="container mt-4">
        <div className="text-center mb-5">
          <h5 className="section-title">Packages</h5>
          <h1 className="mb-0">Awesome Packages</h1>
        </div>
        <Row>
          {packages.map((pkg, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <div className="position-relative">
                  <Card.Img variant="top" src={pkg.img} alt={pkg.title} className="rounded-top" />
                  <div className="d-flex justify-content-around border position-absolute bg-light w-100" style={{ bottom: 0 }}>
                    <small><i className="fa fa-map-marker-alt me-2"></i>{pkg.location}</small>
                    <small><i className="fa fa-calendar-alt me-2"></i>{pkg.duration}</small>
                    <small><i className="fa fa-user me-2"></i>{pkg.people}</small>
                  </div>
                  <div className="packages-price py-2 px-4 bg-primary text-white position-absolute" style={{ top: 0, right: 0 }}>
                    {pkg.price}
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{pkg.title}</Card.Title>
                  <Card.Subtitle className="text-uppercase text-muted">{pkg.subtitle}</Card.Subtitle>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <Card.Text>{pkg.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Button variant="primary">Read More</Button>
                  <Button variant="success">Book Now</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Packages;
