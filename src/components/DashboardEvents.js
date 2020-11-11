import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap'

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
    return incompleteEvents.map(event => <Link to={`/events/${event.event.id}`}><div className="dashboard-events"><img src={event.event.image_url} alt="event-img" /><h4>{event.event.title}</h4><p>{event.event.greenvy_score} Points</p></div></Link>)
    }

    const rendercompleteEvents = () => {
        return completeEvents.map(event => <Link to={`/events/${event.event.id}`}><div className="dashboard-events"><img src={event.event.image_url} alt="event-img" /><h4>{event.event.title}</h4><p>{event.event.greenvy_score} Points</p></div></Link>)
     }

    const checkUpcomingEvents = () => {
        if (renderIncompleteEvents().length === 0) {
            return false
        }
        else { return true }
    }

    const checkCompletedEvents = () => {
        if (rendercompleteEvents().length === 0) {
            return false
        }
        else { return true }
    }

    useEffect(() => { findUserEvents()
    setEventType()} , [incompleteEvents]);

    return(
        <Row lg='2'>
        {checkUpcomingEvents()? 
       
        <Col>
            <div style={{borderColor: "rgb(226, 218, 170)"}} className="dash-events-col">
                <div className="dash-events-bg"></div>
                <h2>Upcoming Events</h2>
                {renderIncompleteEvents()}

            </div>
        </Col>: ''
        }

        {checkCompletedEvents()?
        <Col>
            <div className="dash-events-col">
                <div className="dash-events-bg"></div>
                <h2> Completed Events </h2>
                {rendercompleteEvents()} 
            </div>
        </Col>: ''
        }
        
        </Row>
    )
}

export default DashboardEvents;
