import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Routes from './routes';
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
