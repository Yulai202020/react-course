import { useState } from "react"
import "../styles/tiktaktoe.scss"

interface Probs {
    variable: boolean;
    setFunction: Function;
}

export function Square({variable, setFunction}: Probs) {
    const [value, setValue] = useState<string>("");
    return (
        <button

        onClick={(e) => {
            if (e.target.value === "") {
                setValue(variable ? "X" : "O");
                setFunction((prevVal: boolean) => !prevVal);
            }
        }}

        style={{
            border: "1px solid black",
            width: "50px",
            height: "50px"
        }}

        value={value}

        >{value}</button>
    )
}

function TikTakToe() {
    const [isX, setIsX] = useState<boolean>(true);
    return (
        <div className="grid-container">
            {/* <div className="row"> */}
            <Square variable={isX} setFunction={setIsX}/>
            <Square variable={isX} setFunction={setIsX}/>
            <Square variable={isX} setFunction={setIsX}/>
            {/* </div> */}

            {/* <div className="row"> */}
            <Square variable={isX} setFunction={setIsX}/>
            <Square variable={isX} setFunction={setIsX}/>
            <Square variable={isX} setFunction={setIsX}/>
            {/* </div> */}

            {/* <div className="row"> */}
            <Square variable={isX} setFunction={setIsX}/>
            <Square variable={isX} setFunction={setIsX}/>
            <Square variable={isX} setFunction={setIsX}/>
            {/* </div> */}
        </div>
    )
}

export default TikTakToe;