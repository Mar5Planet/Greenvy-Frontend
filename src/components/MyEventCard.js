import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MyEventCard(props) {
    return(
        <Card style={{ width: '18rem', display: 'inline-block' }}>
        <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={props.event.image_url} />
        <Card.Body>
        <Card.Title>{props.event.title}</Card.Title>
        <Card.Title>Greenvy Score: {props.event.greenvy_score}</Card.Title>
            <Card.Text>
                {props.event.description}
            </Card.Text>
            <Link to={`/events/${props.event.id}`} >
            <Button variant="info">Read More</Button>
            </Link>
         </Card.Body>
    </Card>
    )
}

export default MyEventCard;