import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import HeaderMainContent from '../components/HeaderMainContent';
import CodeSnippet from '../components/CodeSnippet';

function NoMatch() {

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="auto" sm="12" lg="10" xl="8">
            <HeaderMainContent>404</HeaderMainContent>
            <Container>
              <Row className="justify-content-md-center">
                <Col className="text-center">
                  <CodeSnippet>
                    {'Sorry, the page you\'re looking for doesn\'t exist.'}
                  </CodeSnippet>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default NoMatch