import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateEvent(props) {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [greenvy, setGreenvy] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');

    const createEvent = () => {
        let event = {
            "title": title,
            "description": description,
            "greenvy_score": greenvy,
            "organizer_id": props.user.id,
            "location": location,
            "image_url": image
        }
        props.createEvent(event)
        props.setCreateForm(false)
    }
    return (
        <div className="create-form">
            <h1> Create Event </h1>
            <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>    
            <Form.Group>
                <Form.Label >Event Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
            </Form.Group>  
            <Form.Group>
                <Form.Label>Event Image</Form.Label>
                <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
            </Form.Group>    
            <Form.Group>
                <Form.Label>Greenvy Score</Form.Label>
                <Form.Control type="text" value={greenvy} onChange={(e) => setGreenvy(e.target.value)}/>
            </Form.Group>
            <Button onClick={createEvent}>Create</Button>    
            </Form>
        </div>
    )
}

export default CreateEvent;
