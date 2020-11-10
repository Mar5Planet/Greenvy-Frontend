import React from 'react';
import { Link } from 'react-router-dom';

function OrganizedEvent(props) {
    return (
        <div className="">
            <img style={{width: '50px'}} src={props.userEvent.user.profile_img} alt="user-img" />
            <Link to={`/profile/${props.userEvent.user.id}`}>
            <h5>{props.userEvent.user.username} attending {props.userEvent.event.title}</h5>
            <h5>{props.userEvent.event.greenvy_score}</h5>
            </Link>
            <button onClick={() => {
                props.approvePoints(props.userEvent)
                props.changeStatus(props.userEvent)}}> Approve </button>
        </div>
    )
}

export default OrganizedEvent;