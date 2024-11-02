import { useState } from "react";

function Lightbulb() {
    const [bulbOn, setBulbOn] = useState(true);

    return (
        <div>
            <BulbState bulbOn={bulbOn}/>
            <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
        </div>
    )
}

function BulbState({ bulbOn}) {
    return (
        <div>
            {bulbOn ? "Bulb On" : "Bulb Off"}
        </div>
    )
}

function ToggleBulbState({bulbOn, setBulbOn}) {

    function Toggle() {
        setBulbOn(!bulbOn);
    }

    return (
        <div>
            <button onClick={Toggle}>Toggle the bulb</button>
        </div>
    )
}

export default Lightbulb;