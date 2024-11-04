import React, { useRef } from "react";
import "./ClickerCounter.css"; // Import the CSS file

const ClickerCounter =() => {
    const countRef =useRef(0);  //useRef to store the counter value
    const displayRef =useRef(null);  //useRef to target the display element

    const handleClick = () => {
        countRef.current+=1;   //increment the counter
        displayRef.current.innerText = countRef.current;  //update the display
    };

    

    return (
        <div>
        <h1 ref={displayRef}>0</h1>
        <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ClickerCounter;