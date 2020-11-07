import React, { useState, useEffect } from 'react';
import NavgBar from '../components/Navgbar';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Signup from './Signup';
import Login from '../components/Login';
import Dashboard from './Dashboard';
import EventsContainer from './EventsContainer';
import Event from '../components/Event';
import Profile from '../components/Profile'


const userURL = 'http://localhost:3000/users/'
const userEventsUrl = 'http://localhost:3000/user_events/'
const eventsUrl = 'http://localhost:3000/events/'
const userJoinsUrl = 'http://localhost:3000/user_joins/' 
const commentsUrl = 'http://localhost:3000/comments/'

function Main() {
    const [loggedInUser, setLoggedInUser ] = useState('')
    const [users, setUsers] = useState('')
    const [userEvents, setUserEvents] = useState('')
    const [events, setEvents] = useState('')
    const [userJoins, setUserJoins] = useState('')
    const [comments, setComments] = useState('')

    const fetchUser = () => {
        fetch(userURL)
        .then(res => res.json()).then(data => setUsers(data))
        .catch(err => console.log(err))
    };


    const fetchComments = () => {
        fetch(commentsUrl)
        .then(res => res.json()).then(data => setComments(data))
        .catch(err => console.log(err))
    };


    const fetchUserJoins = () => {
        fetch(userJoinsUrl)
        .then(res => res.json())
        .then(data => setUserJoins(data))
        .catch(err => console.log(err))
        }

    const fetchUserEvents = () => {
        fetch(userEventsUrl)
        .then(res => res.json()).then(data => setUserEvents(data))
        .catch(err => console.log(err))
    }

    const fetchEvents = () => {
        fetch(eventsUrl)
        .then(res => res.json()).then(data => setEvents(data))
        .catch(err => console.log(err))
    }

    const createUserEvents = (userId, eventId) => {
            let options = {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accepts": "application/json"
                },
                body: JSON.stringify({
                    "user_id": userId,
                    "event_id": eventId,
                    "status": "incomplete"
                })
            }
    
            fetch(userEventsUrl, options)
            .then(res => res.json())
            .then(data => setUserEvents([...userEvents, data]))
    }

    const deleteUserEvents = (userId, eventId) => {
        let foundUserEvent
        userEvents.map(userEvent => {
            if (userEvent.user_id === userId && userEvent.event_id === eventId) {
                foundUserEvent = userEvent
            } 
        })

        let index = userEvents.findIndex(userEvent => userEvent.id === foundUserEvent.id)
        let newArr = userEvents
        newArr.splice(index, 1)
        let options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                foundUserEvent
            })
        }
        fetch(userEventsUrl+foundUserEvent.id, options)
        .then(res => res.json())
        .then(data => setUserEvents(newArr))
        .catch(err => console.log(err))
    }

    const createUser = user => {
        setLoggedInUser(user)

        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                user
            })
        }
        fetch(userURL, options)
        .then(res => res.json())
        .then(user => setUsers([...users, user]))

    }

    const createEvent = event => {
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                event
            })
        }
        fetch(eventsUrl, options)
        .then(res => res.json())
        .then(ev => setEvents([...events, ev]))

    }

    const createComment = comment => {
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                comment
            })
        }
        fetch(commentsUrl, options)
        .then(res => res.json())
        .then(comm => setComments([...comments, comm]))

    }

    const createUserJoin = (follower, following) => {
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                "follower_id": follower.id,
                "followed_id": following.id
            })
        }
        fetch(userJoinsUrl, options)
        .then(res => res.json())
        .then(userJoin => setUserJoins([...userJoins, userJoin]))
        console.log(userJoins)
    }

    const deleteUserJoins = (followerId, followedId) => {
        let foundUserJoin
        userJoins.map(userJoin => {
            if (userJoin.follower_id === followerId && userJoin.followed_id === followedId) {
                foundUserJoin = userJoin
            } 
        })

        let index = userJoins.findIndex(userJoins => userJoins.id === foundUserJoin.id)
        let newArr = userJoins
        console.log(userJoins)
        console.log(newArr)
        console.log(foundUserJoin)
        newArr.splice(index, 1)
        let options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                foundUserJoin
            })
        }
        fetch(userJoinsUrl+foundUserJoin.id, options)
        .then(res => res.json())
        .then(data => setUserJoins(newArr))
        .catch(err => console.log(err))
    }

    const patchUserEvent = userEvent => {
        console.log('patch')
        let index = userEvents.findIndex(userE => userE.id === userEvent.id)
        let newArr = userEvents
        newArr[index].status = 'complete'
        let options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                status: "complete"
            })
        }
        fetch(userEventsUrl+userEvent.id, options)
        .then(res => res.json())
        .then(data => setUserEvents(newArr))
    }

    const setUserEventsStatus = (userEvent) => {
        let index = userEvents.findIndex(userE => userE.id === userEvent.id)
        let newArr = userEvents
        newArr[index].status = 'complete'
        setUserEvents(newArr)
    }

    useEffect(() => { fetchUser() 
        fetchUserEvents()
        fetchEvents()
        fetchUserJoins()
        fetchComments()} , []);

    return (
        <>
        <NavgBar user={loggedInUser} logout={() => setLoggedInUser('')}/>
        <Switch>
            <Route path="/" exact>
              {loggedInUser?  ''
              : <Home user={loggedInUser}/>}
            </Route>
            <Route path="/signup" exact>
             <Signup users={users} setUser={createUser}/>
            </Route>
            <Route path="/login" exact>
             <Login users={users} setUser={setLoggedInUser}/>
            </Route>
            <Route path="/dashboard" exact>
                {loggedInUser? <Dashboard changeStatus={setUserEventsStatus} approvePoints={patchUserEvent} userEvents={userEvents} events={events} user={loggedInUser}/> : null}
            </Route>
            <Route path="/events" exact>
                {loggedInUser? <EventsContainer createEvent={createEvent} leave={deleteUserEvents} join={createUserEvents} events={events} userEvents={userEvents} user={loggedInUser} /> : null}
            </Route>
            <Route path={`/events/:id`} render={(matchProps) =><Event {...matchProps} createComment={createComment} comments={comments} user={loggedInUser} users={users} events={events}/>} />
            <Route path={`/profile/:id`} render={(matchProps) =><Profile {...matchProps} createUserJoin={createUserJoin} deleteUserJoins={deleteUserJoins} user={loggedInUser} users={users} userJoins={userJoins} userEvents={userEvents}/>} />
  

        </Switch>
        
        </>
    )
}

export default Main;