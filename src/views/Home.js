import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BodyMainContent from '../components/BodyMainContent';
import CodeSnippet from '../components/CodeSnippet';
import HeaderMainContent from '../components/HeaderMainContent';

class WelcomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs="auto" sm="12" lg="10" xl="8">
              <HeaderMainContent>Hello!</HeaderMainContent>
              <CodeSnippet>
                {'{console.log("Hi there!)}'}<br/>
              </CodeSnippet>
              <BodyMainContent>
                Welcome to my personal page. My name is Raditya, my friends call me Radit. I am currently residing in Delft, the Netherlands. Please feel free to see the rest of the web to get to know me, and please don't hesitate to contact me.
              </BodyMainContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default WelcomePage
