import React, { useState, useEffect } from 'react'
import Scores from '../components/Scores'
import Car from '../components/Car'
import DashboardEvents from '../components/DashboardEvents'
import OrganizeEventContainer from './OrganizeEventContainer'
import FriendsEvents from '../components/FriendsEvents'

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
        <>
            
            <h1> My Dashboard </h1>
            <Scores user={props.user} userEvents={props.userEvents}/>
            <DashboardEvents userEvents={props.userEvents} user={props.user} events={props.events}/>
            <FriendsEvents user={props.user} userEvents={props.userEvents} userJoins={props.userJoins} />
            {hasCar? <Car carType={carType}/>: null}
            <OrganizeEventContainer changeStatus={props.changeStatus} approvePoints={props.approvePoints} user={props.user} events={props.events} userEvents={props.userEvents}/>
        </>

    )
}

export default Dashboard;