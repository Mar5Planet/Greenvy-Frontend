import React, { useState, useEffect } from 'react'
import Scores from '../components/Scores'
import Car from '../components/Car'
import DashboardEvents from '../components/DashboardEvents'
import OrganizeEventContainer from './OrganizeEventContainer'
import FriendsEvents from '../components/FriendsEvents'
import { Grid, Row, Col} from 'react-bootstrap'

function Dashboard(props) {
    const [hasCar, setHasCar] = useState(true)
    const [carType, setCarType] = useState('')
    const checkUserCar = () => {
        if (props.user.car_type === "a") {
            setHasCar(false)
        }
        setCarType(props.user.car_type)
    }

    useEffect(() => {checkUserCar()}, [hasCar]);

    return (
        <div className='dashboard'>  
            <h1> My Dashboard </h1>
            <img className="dashboard-gif" src='https://media2.giphy.com/media/Ur1ePKk5h82J2nKUmm/giphy.gif' alt="earth-gif"/>
            <Scores user={props.user} userEvents={props.userEvents} />
            <DashboardEvents userEvents={props.userEvents} user={props.user} events={props.events}/>
            <Row lg='2' className="dashboard-row">
                <Col className="dashboard-col">
                    <FriendsEvents user={props.user} userEvents={props.userEvents} userJoins={props.userJoins} />
                </Col>
                <Col>
                <OrganizeEventContainer changeStatus={props.changeStatus} approvePoints={props.approvePoints} user={props.user} events={props.events} userEvents={props.userEvents}/>
                </Col>
                {hasCar?
                <Col style={{margin: '5% auto 0'}}>
                    <Car carType={carType}/>
                </Col> : null}

            </Row>

            
        </div>

    )
}

export default Dashboard;