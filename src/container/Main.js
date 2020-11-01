import React, { useState, useEffect } from 'react';
import NavgBar from '../components/Navgbar';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home'
import Signup from './Signup'
import Login from '../components/Login'
import Dashboard from './Dashboard'

const userURL = 'http://localhost:3000/users/'

function Main() {
    const [loggedInUser, setLoggedInUser ] = useState('')
    const [users, setUsers] = useState('')

    const fetchUser = () => {
        fetch(userURL)
        .then(res => res.json()).then(data => setUsers(data))
        .catch(err => console.log(err))
    };

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

    useEffect(() => { fetchUser()} , []);
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
                {loggedInUser? <Dashboard user={loggedInUser}/> : null}
            </Route>


        </Switch>
        
        </>
    )
}

export default Main;