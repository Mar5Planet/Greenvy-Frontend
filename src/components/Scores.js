import React from 'react'
import Card from 'react-bootstrap/Card'


function Scores(props) {
    console.log(props.user.footprint)
    const footPrintImg = () => {
        if (props.user.footprint <= 120) {
            return 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
        else {
            console.log('lmao what')
        }
    }

    return(
        <div className="scores">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={footPrintImg()} />
                <Card.Body>
                <Card.Title>Carbon Footprint</Card.Title>
                <Card.Title>{props.user.footprint}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )

}

export default Scores;