import React, { useState } from 'react';
import Store from '../components/AppState';
import CarbonFootprintCalc from '../components/CarbonFootprint';
function Signup(props) {
    const [createdUser, setCreatedUser] = useState('')

    return (
        <>
        <CarbonFootprintCalc users={props.users} setUser={props.setUser} store={Store} user={createdUser} createUser={setCreatedUser}/>
        </>
    )
}

export default Signup;