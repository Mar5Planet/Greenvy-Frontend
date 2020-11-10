import React from 'react';

function Car(props) {
    const carTypeAttr = carType => {
        if (carType === 'b') {
            return 'an electricity'
        } if (carType === 'c') {
            return 'a gasoline'
        }
    } 

    const carTypeCond = carType => {
        if (carType === 'b') {
            return true
        } if (carType === 'c') {
            return false
        }
    } 
    return (
        <div className="car">
            <h1> My Vehicle </h1>
            <p>You've indicated ownership of {carTypeAttr(props.carType)} powered vehicle</p>
            {carTypeCond(props.carType)? <div className="electric-car"><p>Find charging station near you:</p><iframe src='https://www.plugshare.com/widget2.html?plugs=1,2,3,4,5,6,42,13,7,8,9,10,11,12,14,15,16,17' width='565' height='400' allow='geolocation'></iframe></div> : <p> <a href="https://www.energy.gov/eere/electricvehicles/electric-vehicle-benefits">Learn more </a> about renewable energy and it's impact on your carbon footprint </p>}
        </div>
    )
}

export default Car;