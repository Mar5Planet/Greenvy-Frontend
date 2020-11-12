import React from 'react';
import { Link } from 'react-router-dom';

function OrganizedEvent(props) {
    return (
        <div className="dash-point-approve">
            <img style={{width: '50px'}} src={props.userEvent.user.profile_img} alt="user-img" />
            <Link to={`/profile/${props.userEvent.user.id}`}>
            <h5>{props.userEvent.user.username} attending {props.userEvent.event.title}</h5>
            </Link>
            <span  onClick={() => {
                props.approvePoints(props.userEvent)
                props.changeStatus(props.userEvent)}} className="circle-wrapper">
                <div className="success circle"> +
                </div>
                
            </span>
        </div>
    )
}

export default OrganizedEvent;