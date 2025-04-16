import React from "react";
import {useState} from 'react'

import Child from './Child.js'

const Parent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleChildData(data){
        setIsLoggedIn(data)
        console.log("Received from child:", data);
    }
    return(
        <>
            <h2>Parent Component</h2>
            {isLoggedIn ? <p>You are logged in!</p> : <Child sendDataToParent={handleChildData}/>}
        </>
    )
}

export default Parent