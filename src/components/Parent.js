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
            <h1>Parent Component</h1>
            {isLoggedIn ? <p>You are logged in!</p> : <Child sendDataToParent={handleChildData}/>}
        </>
    )
}

export default Parent