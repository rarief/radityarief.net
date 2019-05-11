import React from 'react';
import { Switch, Route } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from './components/PageHeader';
import WelcomePage from './views/Home';
import About from './views/About';
import Resume from './views/Resume';
import NoMatch from './views/NoMatch';
import Photos from './views/Photos';
import './App.css';
import PageFooter from './components/PageFooter';

function App() {
  let d = new Date();

  return (
    <React.Fragment>

      <PageHeader />

      <div className="rdt-wrapper">
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/photography" component={Photos}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>

      <PageFooter currentYear={d.getFullYear()}/>

    </React.Fragment>
  );
}

export default App;
