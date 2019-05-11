import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PageFooter(props) {
  return (
    <React.Fragment>
      <div className="rdt-page-footer-container">
        <Container className="">
          <Row className="justify-content-md-center">
            <Col className="text-center">
              <div className="rdt-page-footer">Copyright &copy; {props.currentYear} Raditya Arief</div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default PageFooter