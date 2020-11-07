import React from 'react';
import { Link } from 'react-router-dom';

function Comment(props) {
    
    return(
        <div className="comment">
            <Link to={`/profile/${props.comment.user.id}`}>
            <img src={props.comment.user.profile_img} alt="user-img" />
            <h4>{props.comment.user.username}</h4>
            </Link>
            <p>{props.comment.content}</p>

        </div>
    )
}

export default Comment;