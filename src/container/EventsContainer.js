import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import MyEventCard from '../components/MyEventCard';
import Button from 'react-bootstrap/Button';
import CreateEvent from '../components/CreateEvent';
function EventsContainer(props) {
    const [createForm, setCreateForm] = useState(false)

    const renderEvents = () => {
        let foundEvents = props.events.filter(event => event.organizer_id !== props.user.id)
        return foundEvents.map(event => <EventCard key={event.id} leave={props.leave} join={props.join} event={event} userEvents={props.userEvents} user={props.user}/>)
    }

    const renderMyEvents = () => {
        let foundEvents = props.events.filter(event => event.organizer_id === props.user.id)
        return foundEvents.map(event => <MyEventCard key={event.id} leave={props.leave} join={props.join} event={event} userEvents={props.userEvents} user={props.user}/>)
    }

    return(
        <>
        {createForm? <CreateEvent createEvent={props.createEvent} setCreateForm={setCreateForm} user={props.user}/> : null }
        <div className="event-container">
            <Button variant="warning" onClick={() => setCreateForm(true)}> Create Event </Button>
            <h1> Community Events </h1>
            {renderEvents()}
            <h1> My Events </h1>
            {renderMyEvents()}

        </div>
        </>
    )
}

export default EventsContainer;