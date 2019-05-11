import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BodyMainContent from '../components/BodyMainContent';
import CodeSnippet from '../components/CodeSnippet';
import HeaderMainContent from '../components/HeaderMainContent';

function About() {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="auto" sm="12" lg="10" xl="8">
            <HeaderMainContent>About</HeaderMainContent>
            <CodeSnippet>
              {'<React.Fragment>'}<br/>
              {'  <h1 className="section-heading">About</h1>'}<br/>
              {'</React.Fragment>'}
            </CodeSnippet>
            <BodyMainContent>
              Hi there!
              <br/><br/>
              I am a recent master’s graduate who has just completed an MSc in Management of Technology from Delft University of Technology (TU Delft). In addition to my BSc in Computer Science, the master’s degree has prepared me to pursue my goal to progress into a more strategic role in the IT industry.
              <br/><br/>
              From my master’s study, I have learned some fundamental knowledge of technology management, such as product development processes, research methods, and technology-related strategies. The research methods course has taught me to various steps in research, including formulating hypotheses, developing research designs, and interpreting and presenting the findings.
              <br/><br/>
              Next to my study, I was active in the student association. During my bachelor study, I led a division of 15+ students in organizing multiple projects throughout the year. I also had the opportunity to lead an IT lead in an e-commerce startup company. During this period, not only I have demonstrated the ability to work and communicate effectively with the IT team, but also to conduct discussions with other stakeholders, such as marketing, customer service, and the CEO.
            </BodyMainContent>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default About
