import { render } from '@testing-library/react'
import React from 'react'
import {Jumbotron,Button, Container,Card,Row, Col} from 'react-bootstrap'
import LatestRelease from '../data/fantasy.json'
import '../styles/cardstyle.css'


class Content extends React.Component{

render(){
    return(
        <Container fluid>

        <Row className="justify-content-between mx-2">{LatestRelease.map(book=>{
            return(<Col className='mb-4'><Card style={{ width: '15rem' }} key={book.asin}>
  <Card.Img className ='cardImages' variant="top" src={book.img} />
  <Card.Body>
    <Card.Title className='titleWrap'>{book.title}</Card.Title>
    <Card.Text >
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card></Col>)})}</Row>
            
        </Container>
        
    )
}

}

export default Content


