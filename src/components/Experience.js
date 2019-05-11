import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Experience(props) {
  return (
    <React.Fragment>
      <Row noGutters>
        <Col md={3} className="d-none d-md-block">{props.period}</Col>
        <Col md={9} xs={12}>
          <Row>
            <Col xs={6} md={12}>
              <div className="rdt-resume-role">{props.first_heading}</div>
            </Col>
            <Col xs={6}>
              <div className="d-md-none text-right">{props.period}</div>
            </Col>
          </Row>
          <div>{props.second_heading}</div>
          <ul className="py-2 pl-4">
            {props.descriptions.map(experienceDescription => (
              <li>{experienceDescription}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Experience
