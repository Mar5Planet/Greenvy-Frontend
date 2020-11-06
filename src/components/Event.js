import React, { useState, useEffect } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Comment from './Comment';

function Event(props) {
    const [events] = useState(props.events)
    const [event, setEvent] = useState(false)
    const [organizer, setOrganizer] = useState('')
    const [users, setUsers] = useState(props.users)
    const [eventComments, setEventComments] = useState('')
    
    const findOrganizer = userId => {
        if (users) {
            setOrganizer(users.find(user => user.id === userId))
        }
    }

    const findEventComments = () => {
        let matchingComments
        if (event) {
             setEventComments(props.comments.filter(comment => comment.event_id === event[0].id))
        }

        console.log(eventComments)
        
    }

    const renderComments = () => {
        if (eventComments) {
            return eventComments.map(comment => <Comment key={comment.id} comment={comment}/>)
        }
        
    }

    const findAndSetOrganizer = () => {
        if (event) {
            findOrganizer(event[0].organizer_id)
        }
    }
    
    const findEventById = (eventId) => {
        if (events) {
            setEvent(events.filter(event => event.id === parseInt(eventId)))
        }

        if (event) {
            findOrganizer(event[0].organizer_id)
        }
        
    }

    

    useEffect(() => {findEventById(props.match.params.id)
    findAndSetOrganizer()
    findEventComments()}, [event]);
    return (
        <>
        {event? 
        <div className="event-page">
        {console.log(event, organizer)}
        <img src={event[0].image_url} alt="event-img" />
        <h1>{event[0].title}</h1>
        <h3>{event[0].location}</h3>
        <div style={{width: '20%', border: '3px solid black'}} className="event-organizer">
            <h3>Organizer:</h3>
            <Link to={`/profile/${organizer.id}`}>
            <img style={{width: '20%'}} src={organizer.profile_img} alt="organizer-img" />
            <h4>{organizer.username}</h4>
            </Link>
        </div>
        <label></label>
        <p>{event[0].description}</p>
        <div className="comments">
            <h1>Comments</h1>
            {renderComments()}
        </div>
  
        </div>
        : null
        }
        </>

    )
    
}

export default Event;
