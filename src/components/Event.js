import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Comment from './Comment';
import CommentForm from './CommentForm'

class Event extends React.Component {
    state = {
        events: this.props.events,
        event: false,
        organizer: '',
        users: this.props.users,
        eventComments: ''
    }

    
    findOrganizer = userId => {
        let foundOrganizer = this.state.users.find(user => user.id === userId) 
        if (this.state.users) {
            this.setState({
                organizer: foundOrganizer})
        }
    }



    findEventComments = () => {
             this.setState({ 
                 eventComments: this.props.comments.filter(comment => comment.event_id === this.state.event[0].id) })
        
    }

    renderComments = () => {
            let comments = this.props.comments.filter(comment => comment.event_id === this.state.event[0].id) 
            return comments.reverse().map(comment => <Comment key={comment.id} comment={comment}/>)

        
    }

   findAndSetOrganizer = () => {
        if (this.state.event) {
            this.findOrganizer(this.state.event[0].organizer_id)
        }
    }
    
    findEventById = (eventId) => {
        let eventFound = this.state.events.filter(event => event.id === parseInt(eventId))
        if (this.state.events) {
            this.setState({
                event: eventFound
            })
        }
        
    }

    
    componentDidMount() {
        this.findEventById(this.props.match.params.id)
        this.findAndSetOrganizer()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.event !== prevState.event) {
            this.findEventComments()
            this.findOrganizer(this.state.event[0].organizer_id)
        }
    }

  render() {
      return (
          <>
          {console.log(this.state.eventComments)}
          {this.state.event? 
          <div className="event-page">
          <img className="event-img" src={this.state.event[0].image_url} alt="event-img" />
          <h1>{this.state.event[0].title}</h1>
          <h3>{this.state.event[0].location}</h3>
          <label></label>
          <p className="event-desc">{this.state.event[0].description}</p>
          <div className="event-organizer">
              <h3>Organized by</h3>
              <Link to={`/profile/${this.state.organizer.id}`}>
              <img style={{width: '20%'}} src={this.state.organizer.profile_img} alt="organizer-img" />
              <h4>{this.state.organizer.username}</h4>
              </Link>
          </div>
          <div className="comments">
              <h1>Comments</h1>
              <CommentForm createComment={this.props.createComment} event={this.state.event[0]} user={this.props.user}/>
              {this.renderComments()}
          </div>
    
          </div>
          : null
          }
          </>
  
      )
  }
}

export default Event;
