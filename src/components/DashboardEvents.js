import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'


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
        
       
        <Col>
            <div style={{borderColor: "rgb(226, 218, 170)"}} className="dash-events-col">
                <div className="dash-events-bg"></div>
                <h2>Upcoming Events</h2>
                {checkUpcomingEvents()? <> {renderIncompleteEvents()} </> : <>{'No upcoming events.  '} <FontAwesomeIcon style={{width: "100px", display: 'block', margin: '5% auto', color: "#E1E0D3"}} icon={faSpa} /> </>}  
            </div>
        </Col>
        
        <Col>
            <div className="dash-events-col">
                <div className="dash-events-bg"></div>
                <h2> Completed Events </h2>
                {checkCompletedEvents()? <>{rendercompleteEvents()}</> : <>{'No completed events.  '} <FontAwesomeIcon style={{width: "100px", display: 'block', margin: '5% auto', color: "#E1E0D3"}} icon={faSpa} /> </>}  
            </div>
        </Col>
        
        </Row>
    )
}

export default DashboardEvents;
