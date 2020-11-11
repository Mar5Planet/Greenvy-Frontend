import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import MyEventCard from '../components/MyEventCard';
import Button from 'react-bootstrap/Button';
import CreateEvent from '../components/CreateEvent';
import { Row, Col } from 'react-bootstrap';

function EventsContainer(props) {
    const [createForm, setCreateForm] = useState(false)

    const renderEvents = () => {
        let foundEvents = props.events.filter(event => event.organizer_id !== props.user.id)
        return foundEvents.map(event => <Col><EventCard key={event.id} leave={props.leave} join={props.join} event={event} userEvents={props.userEvents} user={props.user}/></Col>)
    }

    const renderMyEvents = () => {
        let foundEvents = props.events.filter(event => event.organizer_id === props.user.id)
        return foundEvents.map(event => <Col><MyEventCard key={event.id} leave={props.leave} join={props.join} event={event} userEvents={props.userEvents} user={props.user}/></Col>)
    }

    return(
        <>
        <div className="event-gif"></div>
        {createForm? <CreateEvent createEvent={props.createEvent} setCreateForm={setCreateForm} user={props.user}/> : null }
        <div className="event-container">
            <Button className="event-form-btn" variant="warning" onClick={() => setCreateForm(true)}> Create Event </Button>
            <h1> Community Events </h1>
            <Row lg='4'>
            {renderEvents()}
            </Row>

            <h1> My Events </h1>
            <Row lg='4'>
            {renderMyEvents()}
            </Row>

        </div>
        </>
    )
}

export default EventsContainer;