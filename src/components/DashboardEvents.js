import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DashboardEvents(props) {
    const [userEvents, setUserEvents] = useState([])
    const [incompleteEvents, setIncompleteEvents] = useState([])
    const [completeEvents, setCompleteEvents] = useState([])

    const findUserEvents = () => {
        setUserEvents(props.userEvents.filter(userEvent => userEvent.user_id === props.user.id))
    }

    const setEventType = () => {
        let incomplete= userEvents.filter(userEvent => userEvent.status === "incomplete")
        setIncompleteEvents(incomplete)

        let complete = userEvents.filter(userEvent => userEvent.status === "complete")
        setCompleteEvents(complete)
    }

    const renderIncompleteEvents = () => {
    return incompleteEvents.map(event => <Link to={`/events/${event.event.id}`}><div><h2>{event.event.title}</h2><p>{event.event.greenvy_score}</p></div></Link>)
    }

    const rendercompleteEvents = () => {
        return completeEvents.map(event => <Link to={`/events/${event.event.id}`}><div><h2>{event.event.title}</h2><p>{event.event.greenvy_score}</p></div></Link>)
     }

    useEffect(() => { findUserEvents()
    setEventType()} , [incompleteEvents]);

    return(
        <>
        {console.log(userEvents)}
        <div className="upcoming-events">
            <h1>Upcoming Events</h1>
            {renderIncompleteEvents()}
        </div>
        <div className="completed-events">
            <h1> Completed Events </h1>
            {rendercompleteEvents()}
        </div>
        
        </>
    )
}

export default DashboardEvents;
