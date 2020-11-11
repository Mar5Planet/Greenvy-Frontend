import React, { useState, useEffect } from 'react'
import OrganizeEvent from '../components/OrganizedEvent'

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
        {checkEvents()?
        <>
        <h1> Greenvy points to be approved</h1>
        {renderEvents()}
        </> : ''}
        </>
    )
}

export default OrganizeEventContainer;