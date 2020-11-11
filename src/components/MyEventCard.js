import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MyEventCard(props) {
    return(
        <Card style={{ width: '18rem', display: 'inline-block' }}>
        <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={props.event.image_url} />
        <Card.Body>
        <Card.Title style={{color: "#87DCC0"}}><b>{props.event.title}</b></Card.Title>
            <p>Greenvy Score: <b>{props.event.greenvy_score}</b></p>
            <Link to={`/events/${props.event.id}`} >
            <Button variant="info">Read More</Button>
            </Link>
         </Card.Body>
    </Card>
    )
}

export default MyEventCard;