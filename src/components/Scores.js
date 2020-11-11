import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Grid, Row, Col} from 'react-bootstrap'

function Scores(props) {
    const [pendingEvents, setPendingEvents] = useState([])
    const [completeEvents, setCompleteEvents] = useState([])

    const findUserEvents = () => {
       let userEvents = props.userEvents.filter(userEvent => userEvent.user_id === props.user.id)
       setPendingEvents(userEvents.filter(userEvent => userEvent.status === "incomplete"))
       setCompleteEvents(userEvents.filter(userEvent => userEvent.status === "complete"))
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
            <Row lg="3">
                <Col>
            <Card className='scores-footprint' style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Body>
                <Card.Title>Carbon Footprint</Card.Title>
                <Card.Title><b>{props.user.footprint}</b></Card.Title>
                    <Card.Text>
                    Your footprint is {props.user.footprint} lbs Co2/day. The average is 97.
                    </Card.Text>
                </Card.Body>
            </Card>
                </Col>
                <Col>
            <Card className="scores-greenvy" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Body>
                <Card.Title>Greenvy Score</Card.Title>
                <Card.Title><b>{greenvyScore()}</b></Card.Title>
                    <Card.Text>
                     Community events engagement score.
                    </Card.Text>
                </Card.Body>
            </Card>
                
                </Col>

                <Col>
            <Card className="scores-pending" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Body>
                <Card.Title>Pending Points</Card.Title>
                <Card.Title><b>{pendingPoints()}</b></Card.Title>
                    <Card.Text>
                    Pendind points to be approved by event organizer.
                    </Card.Text>
                </Card.Body>
            </Card>
                </Col>
            </Row>



        </div>
    )

}

export default Scores;