import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'


function Scores(props) {
    const [pendingEvents, setPendingEvents] = useState([])
    const [completeEvents, setCompleteEvents] = useState([])

    const findUserEvents = () => {
       let userEvents = props.userEvents.filter(userEvent => userEvent.user_id === props.user.id)
       setPendingEvents(userEvents.filter(userEvent => userEvent.status === "incomplete"))
       setCompleteEvents(userEvents.filter(userEvent => userEvent.status === "complete"))

       console.log(pendingEvents)

    }


    const footPrintImg = () => {
        if (props.user.footprint <= 120) {
            return 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
        }
        else {
            return 'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
        }
    }

    const pendingPoints = () => {
        let pointCount = 0
        for (let i = 0; i < pendingEvents.length; i++) {
            pointCount += pendingEvents[i].event.greenvy_score
        }
        return pointCount
    }

    const greenvyScore = () => {
        let earnedCount = 0
        for (let i = 0; i < completeEvents.length; i++) {
            earnedCount += completeEvents[i].event.greenvy_score
        }
        return earnedCount
    }

    const greenvyImg = 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
    const pendingImg = 'https://images.pexels.com/photos/51325/industry-sunset-port-facility-mood-51325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

    useEffect(() => { findUserEvents()}, []);

    return(
        <div className="scores">
            <Card style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={footPrintImg()} />
                <Card.Body>
                <Card.Title>Carbon Footprint</Card.Title>
                <Card.Title>{props.user.footprint}</Card.Title>
                    <Card.Text>
                    Your carbon footprint is lower than 
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={greenvyImg} />
                <Card.Body>
                <Card.Title>Greenvy Score</Card.Title>
                <Card.Title>{greenvyScore()}</Card.Title>
                    <Card.Text>
                    Increase your score by particpating in community events.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={pendingImg} />
                <Card.Body>
                <Card.Title>Pending Points</Card.Title>
                <Card.Title>{pendingPoints()}</Card.Title>
                    <Card.Text>
                    Increase your score by particpating in community events.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )

}

export default Scores;