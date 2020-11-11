import React from 'react';
import { Link } from 'react-router-dom';

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
        {checkFriend()?
        <div className="friends-events">
            <h1>My Community's Activity</h1>
            {findFriendsEvents()}
        </div> : ''

        }
        </>
        
    )
}

export default FriendsEvents;