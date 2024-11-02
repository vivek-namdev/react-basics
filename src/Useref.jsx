import { useRef } from "react";

function Useref() {
    return (
        <div>
            <FocusInput/>
            <hr/>

            <Stopwatch/>
        </div>
    )
}

function FocusInput() {

    const inputRef = useRef(null);

    function focusOnInput() {
        inputRef.current.focus();
    }

    return <div>
        <h2>Focus Input</h2>

        <input type="text" id="name" ref={inputRef}/>

        <button onClick={focusOnInput}>Submit</button>
    </div>
}


function Stopwatch() {
    return (
        <div>
            
        </div>
    )
}

export default Useref;;