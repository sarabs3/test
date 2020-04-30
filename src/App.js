import React from 'react';
import './App.css';
import ListData from './views/ListData';
import UserData from './views/UserData';
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import {Dashboard} from "./views/Dashboard";

class App extends React.Component {
  render() {
    return (
      <Dashboard>
        <Container>
        <Row>
          <Col><UserData/></Col>
          <Col></Col>
        </Row>
      </Container>
    </Dashboard>
    )
  }
}

export default App;
