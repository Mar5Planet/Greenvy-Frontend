import React from 'react'
import Scores from '../components/Scores'

function Dashboard(props) {

    return (
        <>
            <h1> My Dashboard </h1>
            <Scores user={props.user}/>
        </>

    )
}

export default Dashboard;