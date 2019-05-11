import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BodyMainContent from '../components/BodyMainContent';
import CodeSnippet from '../components/CodeSnippet';
import HeaderMainContent from '../components/HeaderMainContent';
import Experience from '../components/Experience';

function Resume() {

  const eduExperiences = [{
    period: "2015 - 2018",
    first_heading: "Delft University of Technology (TU Delft)",
    second_heading: "Master of Science (MSc), Management of Technology",
    descriptions: ["Cyber security specialization.", "Thesis titled “Cyberattack-related cascading effects mitigation: a risk-based approach for ICS network segmentation design in chemical plants.", "Select courses: High-Tech Marketing, Technology Strategy and Entrepreneurship, Organizational Decision Making, Research Method, Cyber Security Management."]
  }, {
    period: "2007 - 2011",
    first_heading: "Institut Teknologi Bandung (ITB)",
    second_heading: "Bachelor of Science (BSc), Informatics",
    descriptions: ["Thesis: Offline web application: a case study of word processors.", "Select courses: Web Programming, Database, Human-Computer Interaction, Software Project."]
  }];

  const workExperiences = [{
    period: "May 2013 - Mar 2015",
    first_heading: "Full-Stack Web Developer, Co-founder",
    second_heading: "Kickdefy.com",
    descriptions: ["Co-founded an amateur football-related startup with three others.", "Performed full-stack developer duties independently while working full-time.", "Involved in developing app requirements through brainstorm and user analyses."]
  }, {
    period: "Mar 2014 - Dec 2014",
    first_heading: "IT Team Lead",
    second_heading: "Brodo Ganesha Indonesia",
    descriptions: ["Managed an IT team that responsible for an e-commerce website.", "Performed day-to-day team management duties, including backlog management, work assignment, personnel monitoring, and performance evaluation.", "Worked with designers, marketing, and customer service to identify enhancement opportunities.", "Conducted continuous research to improve website usability using metrics from analytics tools."]
  }, {
    period: "May 2013 - Feb 2014",
    first_heading: "Full-Stack Developer",
    second_heading: "Brodo Ganesha Indonesia",
    descriptions: ["Gathered, prioritized, and implemented new requirements for an e-commerce website.", "Analyzed and implemented various enhancements to optimize website performance; achieved a 95+ score in Google PageSpeed.", "Planned and anticipated a traffic spike during the discount period through website optimization and server migration."]
  }, {
    period: "Feb 2012 – Apr 2013",
    first_heading: "Full-Stack Developer",
    second_heading: "Senja Solutions",
    descriptions: ["Worked on several web development projects from multinational clients, such as HBO, Sony Europe."]
  }, {
    period: "May 2010 – Jul 2010",
    first_heading: "Software Engineer Intern",
    second_heading: "IBM-JTI",
    descriptions: ["Optimized the internal web applications by consolidating separate applications into a single dashboard."]
  }];

  const sideProjects = [{
    period: "Apr 2013 – May 2013",
    first_heading: "Promotional Facebook App Development",
    second_heading: "Honda Indonesia",
    descriptions: ["Full-stack web development duties, including frontend development, backend development, and database design."]
  }, {
    period: "Jan 2012 – Mar 2013",
    first_heading: "E-commerce Design & Development",
    second_heading: "Lazuli Sarae",
    descriptions: ["Redesigned and developed the interface of an e-commerce website.", "Maintained the website operation."]
  }, {
    period: "Dec 2012 – Jan 2013",
    first_heading: "Frontend Design & Development",
    second_heading: "Telkom Indonesia API Web Application",
    descriptions: ["Frontend development (HTML, CSS, JS, jQuery)."]
  }, {
    period: "Dec 2012 – Jan 2013",
    first_heading: "Web Development for ITB Alumni Tracer Study",
    second_heading: "Institut Teknologi Bandung (ITB)",
    descriptions: ["Frontend (HTML, CSS, JS) and backend (PHP)."]
  }];

  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="auto" sm="12" lg="10" xl="8">

            <HeaderMainContent>Resume</HeaderMainContent>

            <CodeSnippet>
              {'<React.Fragment>'}
              <br/>
              {'  <h1 className="section-heading">Resume</h1>'}
              <br/>
              {'</React.Fragment>'}
            </CodeSnippet>

            <BodyMainContent>
              Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            </BodyMainContent>

            <h2 className="rdt-subheading">Education-Experience</h2>
            <Container className="rdt-resume p-0">
            {eduExperiences.map((eduExperience) => (
              <Experience {...eduExperience} />
            ))}
            </Container>

            <br/>

            <h2 className="rdt-subheading">Professional-Experience</h2>
            <Container className="rdt-resume p-0">
            {workExperiences.map((workExperience) => (
              <Experience {...workExperience} />
            ))}
            </Container>

            <br/>

            <h2 className="rdt-subheading">Side-Projects</h2>
            <Container className="rdt-resume p-0">
            {sideProjects.map((sideProject) => (
              <Experience {...sideProject} />
            ))}
            </Container>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Resume