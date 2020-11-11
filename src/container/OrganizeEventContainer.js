import React, { useState, useEffect } from 'react'
import OrganizeEvent from '../components/OrganizedEvent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'

function OrganizeEventContainer(props) {
    const [events, setEvents] = useState('')
    const findOrganizedEvents = () => {
        let foundEvents = []
        foundEvents = props.userEvents.filter(userEvent => userEvent.event.organizer_id === props.user.id && userEvent.status === "incomplete" && userEvent.user.id !== props.user.id)
        setEvents(foundEvents)
    }

    useEffect(() => { findOrganizedEvents()} , [events]);

    const renderEvents = () => {
        if (events) {
            return events.map(event => <OrganizeEvent changeStatus={props.changeStatus} key={event.id} approvePoints={props.approvePoints} userEvent={event}/>)
        }
    }

    const checkEvents = () => {
        if (renderEvents()) {
            if (renderEvents().length === 0) {
                return false
            } else {
                return true
            }
        }
    }

    return (
        <>
        <div className="dash-approve-container">
            <h2> Greenvy points to be approved</h2>
        {checkEvents()?
        <>
        {renderEvents()}
        </>
        : <>{'No pending event requests.  '} <FontAwesomeIcon style={{width: "100px", display: 'block', margin: '5% auto', color: "#E1E0D3"}} icon={faSpa} /> </>}
        </div> 
        </>
    )
}

export default OrganizeEventContainer;