import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'


function FriendsEvents(props) {

    const checkStatus = status => {
        if (status === 'incomplete') {
            return 'joined'
        }
        else if (status === 'complete') {
            return 'completed'
        }
    }
    const findFriendsEvents = () => {
        let followingJoin = props.userJoins.filter(userJoin => userJoin.follower_id === props.user.id)
        let friendsEventsArr = []
        for (let i=0; i < followingJoin.length; i++) {
            let foundEvent = props.userEvents.filter(userEvent => userEvent.user_id === followingJoin[i].followed_id)
            foundEvent.forEach(event => {
                friendsEventsArr.push(event)
            });
        }
        console.log(friendsEventsArr)
        let friendCompletedEvents = friendsEventsArr.filter(friendEvent => friendEvent.status === "complete")
        let friendIncompletedEvents = friendsEventsArr.filter(friendEvent => friendEvent.status === "incomplete")
    return friendsEventsArr.map(friendEvent => <div className="friend-activity"><Link to={`/profile/${friendEvent.user.id}`}><img src={friendEvent.user.profile_img} alt="user-img"/><p>{friendEvent.user.username}</p></Link> <p>{checkStatus(friendEvent.status)}</p> <Link to={`/events/${friendEvent.event.id}`}><p>{friendEvent.event.title}</p></Link></div>)
        
    }

    const checkFriend = () => {
        if (findFriendsEvents().length === 0) {
            return false
        } else {
            return true
        }
    }

    return (
        <>
        <div className="friends-events">
            <h2>My Community's Activity</h2>
        {checkFriend()?
        <>
            {findFriendsEvents()}
        </>
        : <>{'No recent community activity found.'} <FontAwesomeIcon style={{width: "100px", display: 'block', margin: '5% auto', color: "#E1E0D3"}} icon={faSpa} /></>}
    </div> 
        </>
        
    )
}

export default FriendsEvents;