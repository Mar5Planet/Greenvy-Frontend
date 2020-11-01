import React from 'react';
import Button from 'react-bootstrap/Button'
import Video from '../public/videos/emissionsChart.mp4';
function Home() {
    return(
        <div>
            <video width="600px" height="500" controls autoPlay>
                <source src={Video} type="video/mp4"/>
            </video>
            <h1>Join The Green Revolution</h1>
            <Button variant="info"> Login </Button>{' '}
            <Button variant="warning"> Signup </Button>
        </div>
    )
}

export default Home;