import React from 'react';
import Button from 'react-bootstrap/Button';

class Profile extends React.Component {

    foundUser = () => {
        return this.props.users.find(user => user.id === parseInt(this.props.match.params.id))
    }
    findFollowing = (userId) => {
        let followers= this.props.userJoins.filter(userJoin => userJoin.followed_id === userId)
        return followers
    }

    findFollowers = (userId) => {
        return this.props.userJoins.filter(userJoin => userJoin.follower_id === userId)
    }

    checkUser = () => {
        let foundUser = this.props.users.find(user => user.id === parseInt(this.props.match.params.id))
        if (foundUser.id === this.props.user.id) {
            return true
        }
    }

    

    userFollowing = () => {
        let followers = this.props.userJoins.filter(userJoin => userJoin.followed_id === parseInt(this.props.match.params.id))
        console.log(followers)
        let check= followers.filter(follower => follower.id === this.props.user.id)
        if (check.length === 0) {
            return false
        } else {
            return true
        }
    }

    createFollower = () => {
        this.props.createUserJoin(this.foundUser(), this.props.user)
    }

    removeFollower = () => {
        this.props.deleteUserJoins(this.props.user.id, this.foundUser().id)
    }

    render() {
        return (
            <div className="user-profile">
                <h1> User Profile </h1>
                <h2> {this.foundUser().username}</h2>
                <img src={this.foundUser().profile_img} alt="user-img"/>
                {this.checkUser()? null : <Button onClick={this.userFollowing()? this.createFollower : this.removeFollower}>
        {this.userFollowing()? 'Follow' : 'Unfollow'} </Button> }
                <div className="followers-following">
                <h4>following: {this.findFollowing(parseInt(this.props.match.params.id)).length}</h4>
                <h4>Followers: {this.findFollowers(parseInt(this.props.match.params.id)).length}</h4>
                </div>
            </div>
        )

    }
}

export default Profile;