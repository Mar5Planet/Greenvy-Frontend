import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
function Profile(props) {
    const [userFollow, setUserFollow] = useState('')
    const findUser= () => {
        return props.users.find(user => user.id === parseInt(props.match.params.id))

    
    }

    const findFollowing = () => {
        return props.userJoins.filter(userJoin => userJoin.follower_id === parseInt(props.match.params.id))
    }
    const findFollowers = () => {
        return props.userJoins.filter(userJoin => userJoin.followed_id === parseInt(props.match.params.id))

    }

    const renderFollowing = () => {
        let userFollowingJoins = findFollowing()
        let foundFollowing = []
        for (let i = 0; i < userFollowingJoins.length; i++) {
            let users = props.users.find(user => user.id === userFollowingJoins[i].followed_id)
            foundFollowing.push(users)
            
        }
    return foundFollowing.map(user => <Menu.Item><Link to={`/profile/${user.id}`}><img className="dropdown-img" src={user.profile_img} alt='user-img' /> {user.username}</Link></Menu.Item>)
    }

    const renderFollowers = () => {
        let userFollowingJoins = findFollowers()
        let foundFollowers = []
        for (let i = 0; i < userFollowingJoins.length; i++) {
            let users = props.users.find(user => user.id === userFollowingJoins[i].follower_id)
            foundFollowers.push(users)
            
        }
    return foundFollowers.map(user => <Menu.Item><Link to={`/profile/${user.id}`}><img className="dropdown-img" src={user.profile_img} alt='user-img' /> {user.username}</Link></Menu.Item>)
    }

    const menu2 = (
        <Menu>
            {renderFollowers()}
        </Menu>
    )


    const menu = (
        <Menu>
            {renderFollowing()}
        </Menu>
    )
    
    const userFollowing = () => {
        let check = findFollowers().filter(userJoin => userJoin.follower_id === props.user.id)
        if (check.length !== 0) {
            return true
        }
        else {
            return false
        }
    }

    const SettingUserFollow = () => {
        setUserFollow(userFollowing())
    }

    const userCheck = () => {
        if (findUser().id === props.user.id) {
            return true
        } 
        else {
            return false
        }
    }

    const createFollower = () => {
        props.createUserJoin(props.user, findUser())
    }

    const removeFollower = () => {
        props.deleteUserJoins(props.user.id, findUser().id)
    }

    const calculateGreenvy = () => {
        let userEvents = props.userEvents.filter(userEvent => userEvent.user_id === findUser().id)
        let completeEvents = userEvents.filter(userEvent => userEvent.status === "complete")
        let earnedCount = 0
        for (let i = 0; i < completeEvents.length; i++) {
            earnedCount += completeEvents[i].event.greenvy_score
        }
        return earnedCount
    }
    
    useEffect(() => {userFollowing()
    findUser()
    SettingUserFollow()}, []);
    
    renderFollowing()
    return (
            <div className="user-profile">
            <h1> User Profile </h1>
            <img src={findUser().profile_img} alt="user-img"/>
            <h2> {findUser().username}</h2>
            {userCheck()? null : <Button onClick={userFollowing()? removeFollower : createFollower }>
           {userFollowing()? 'Unfollow' : 'Follow'} </Button> }
           <div className="user-scores">
            <div className="user-scores-footprint"><h1>{findUser().footprint}</h1><p>Footprint</p></div>
            <div className="user-scores-greenvy"><h1>{calculateGreenvy()}</h1><p>Greenvy Score</p></div>
           </div>
            <div className="followers-following">
            <Dropdown overlay={menu}><a className="ant-dropdown-link" onClick={e => e.preventDefault()}>following: {findFollowing().length}</a></Dropdown>
            <Dropdown overlay={menu2}><a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Followers: {findFollowers().length}</a></Dropdown>
            </div>
         </div>
    )

}

export default Profile;