import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
function EventCard(props) {
    const [user, setUser] = useState('')
    const [userEvents, setUserEvents] = useState([])
    const [userJoined, setUserJoined] = useState(false)
    console.log(props.userEvents)
    console.log(user)

    const findUserEvents = () => {
        setUserEvents(props.userEvents.filter(userEvent => userEvent.user_id === user.id))
        setUser(props.user)
    }

    const userCompleted = () => {
        let check= userEvents.filter(userEvent => userEvent.event_id === props.event.id && userEvent.status === "complete")

        if (check.length === 0) {
            return false
        } else {
            return true
        }
    }

    const checkUserEvent = () => {
        let check= userEvents.filter(userEvent => userEvent.event_id === props.event.id && userEvent.status === "incomplete")

        if (check.length === 0) {
            return false
        } else {
            return true
        }
    }

    const joinEvent = () => {
        props.join(user.id, props.event.id)
    }

    const leaveEvent = () => {
         props.leave(user.id, props.event.id)
    }

    useEffect(() => {findUserEvents()
    setUserJoined(checkUserEvent())}, [userEvents]);

    return(
        <Card style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Img variant="top" style={{width: '100%', height: '230px'}} src={props.event.image_url} />
            <Card.Body>
            <Card.Title style={{color: "#87DCC0"}}><b>{props.event.title}</b></Card.Title>
            <p>Greenvy Score: <b>{props.event.greenvy_score}</b></p>

            <div className="event-card-btn">
                {userCompleted()? <p style={{display: 'inline-block', marginRight: '4%'}}><b>Completed</b></p> : <Button onClick={checkUserEvent()? leaveEvent : joinEvent} variant="dark">{
                    checkUserEvent()? 'Leave Event' : 'Join Event'
                }</Button>
                }

                <Link to={`/events/${props.event.id}`} >
                <Button variant="info">Read More</Button>
                </Link>

            </div>
             </Card.Body>
        </Card>
    )
}

export default EventCard;
