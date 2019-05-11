import React, { Component } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import HeaderMainContent from '../components/HeaderMainContent';
import CodeSnippet from '../components/CodeSnippet';

import hvimg1 from '../assets/album-1/hogeveluwe1.jpg';
import hvimg2 from '../assets/album-1/hogeveluwe2.jpg';
import hvimg3 from '../assets/album-1/hogeveluwe3.jpg';
import hvimg4 from '../assets/album-1/hogeveluwe4.jpg';
import hvimg5 from '../assets/album-1/hogeveluwe5.jpg';
import hvimg6 from '../assets/album-1/hogeveluwe6.jpg';
import hvimg7 from '../assets/album-1/hogeveluwe7.jpg';
import hvimg8 from '../assets/album-1/hogeveluwe8.jpg';
import hvimg9 from '../assets/album-1/hogeveluwe9.jpg';
import hvimg10 from '../assets/album-1/hogeveluwe10.jpg';
import hvimg11 from '../assets/album-1/hogeveluwe11.jpg';

import igimg1 from '../assets/album-2/ig1.jpg';
import igimg2 from '../assets/album-2/ig2.jpg';
import igimg3 from '../assets/album-2/ig3.jpg';
import igimg4 from '../assets/album-2/ig4.jpg';
import igimg5 from '../assets/album-2/ig5.jpg';
import igimg6 from '../assets/album-2/ig6.jpg';

const hogeVeluweImgs = [hvimg1, hvimg2, hvimg3, hvimg4, hvimg5, hvimg6, hvimg7, hvimg8, hvimg9, hvimg10, hvimg11];
const igImgs = [igimg1, igimg2, igimg3, igimg4, igimg5, igimg6];

// console.log(HogeVeluweImgs);
class Photos extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>

          <Row className="justify-content-md-center">
            <Col xs="auto" sm="12">

              <HeaderMainContent>Photos</HeaderMainContent>

              <CodeSnippet>
                {`<img`}<br/>
                {`  src="people/and/nature"`}<br/>
                {`  alt="Oh I just love taking photos"`}<br/>
                {`/>`}
              </CodeSnippet>

              <Carousel indicators="false">
                {hogeVeluweImgs.map(leImg => (
                  <Carousel.Item>
                    <img className="d-block w-100" src={leImg} alt="img" />
                  </Carousel.Item>
                ))}
              </Carousel>

            </Col>
          </Row>

          <h2 className="rdt-subheading mt-5 mb-3">More from my Instagram</h2>
          <div className="ig-photos-container d-flex flex-wrap">
            {igImgs.map(leImg => (
              <div>
                <img className="" src={leImg} alt="img" />
              </div>
            ))}
          </div>
          
        </Container>
      </React.Fragment>
    )
  }
}

export default Photos