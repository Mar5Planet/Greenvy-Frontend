import React from 'react';

function Profile(props) {

    const foundUser = () => {
        return props.users.find(user => user.id === parseInt(props.match.params.id))
    }
    const findFollowers = (userId) => {
        return props.userJoins.filter(userJoin => userJoin.followed_id === userId)
    }

    const findFollowing = (userId) => {
        return props.userJoins.filter(userJoin => userJoin.follower_id === userId)
    }


    return (
        <div className="user-profile">
            <h1> User Profile </h1>
            <h2> {foundUser().username}</h2>
            <img src={foundUser().profile_img} alt="user-img"/>
            <div className="followers-following">
            <h4>Followers: {findFollowers(parseInt(props.match.params.id)).length}</h4>
            <h4>Following: {findFollowing(parseInt(props.match.params.id)).length}</h4>
            </div>
        </div>
    )
}

export default Profile;