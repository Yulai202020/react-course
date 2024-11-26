import { useState } from "react";

function UseStateObject() {
    const [coords, setCoords] = useState({
        x: 0,
        y: 100
    });

    return (
        <div className="centered">
            <div
                style={{
                    borderRadius: "50%",
                    background: "red",
                    width: "50px",
                    height: "50px",
                    transform: `translate(${coords.x}px, ${coords.y}px)`,
                    position: "absolute",
                    transition: "transform 0.3s ease"
                }}

            ></div>

            <button onClick={() => {
                setCoords(prevCoords => ({
                    x: prevCoords.x,
                    y: prevCoords.y + 50
                }));
            }}>
                Move ball 50 px down
            </button>

            <button onClick={() => {
                setCoords(prevCoords => ({
                    x: prevCoords.x,
                    y: prevCoords.y - 50
                }));
            }}>
                Move ball 50 px up
            </button>
        </div>
    );
}

export default UseStateObject;