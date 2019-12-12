import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardTitle, CardHeader, CardImg, CardText, CardBody,
  CardSubtitle } from 'reactstrap';
import "./App.css";

function App() {
  const [imageObj, setObj] = useState([]);
  
  useEffect(() => {
     axios
    .get('https://api.nasa.gov/planetary/apod?api_key=JGeDYqqdJG7TIC5esXKLRw1qe4eVFcQsuxEeNcwU')
    .then(response => {
      console.log(response.data);
      setObj(response.data);
    })
    .catch(error => console.log(error))
  }, [])
 
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={1}></Col>
        <Col xs={10}><Card body className="text-center">
          <CardImg top src={imageObj.url} alt={imageObj.title} />
            <CardBody style={{backgroundColor:'#D4D1D0'}}>
              <CardHeader>
                <CardTitle tag="h1">{imageObj.title}</CardTitle>
                <CardSubtitle tag="h4">{imageObj.date}</CardSubtitle>
              </CardHeader>
              <CardText className="mt-2">{imageObj.explanation}</CardText>
            </CardBody>
        </Card></Col>
        <Col xs={1}></Col>
        
        
      </Row>
         
    </Container>
  );
}

export default App;
