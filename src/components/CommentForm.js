import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CommentForm(props) {
    const [content, setContent] = useState('')

    const newComment = () => {
        let comment = {}
        comment.event_id = props.event.id 
        comment.content = content 
        comment.user_id = props.user.id 
        setContent('')
        return comment
    }
    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group>
                <Form.Control value={content} onChange={(e) => setContent(e.target.value)} as="textarea" rows={3} placeHolder="Add Comment..." />
            </Form.Group>
            <Button onClick={()=> props.createComment(newComment())}>Add Comment</Button>
        </Form>
    )
}

export default CommentForm;