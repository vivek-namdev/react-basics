import { useState } from "react";

function UseCounter() {

    const [count, setCount] = useState(0);
    
    function increaseCount() {
        setCount(count + 1);
    }

    return {count, increaseCount};
}

function Counter() {
    const {count, increaseCount} = UseCounter();

    return (
        <div>
            <button onClick={increaseCount}>Increase {count}</button>
        </div>
    )
}

export default Counter;