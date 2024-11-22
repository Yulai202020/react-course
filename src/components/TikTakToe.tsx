import { useEffect, useState } from "react"
import "../styles/tiktaktoe.scss"
import { MouseEventHandler } from "react";

interface Probs {
    field: string;
    callback: MouseEventHandler<HTMLButtonElement>;
}

export function Square({field, callback}: Probs) {
    return (
        <button onClick={callback} className="square">{field}</button>
    )
}

function TikTakToe() {
    function createEmptyField() {
        return Array(9).fill("");
    }

    const [gameIsDone, setGameIsDone] = useState<boolean>(false);
    const [isCrossMove, setIsCrossMove] = useState<boolean>(true);
    const [field, setField] = useState<string[]>(createEmptyField());

    function getCallback(id: number) {
        return () => {
            if (gameIsDone) {
                alert("Game is over, please clear board for starting new game!");
                return;
            } else if (field[id] === "") {
                let tmpField = [...field];
                tmpField[id] = isCrossMove ? "X" : "O";
                setField(tmpField);
                setIsCrossMove(prev => !prev)
                return;
            } else {
                alert("You cant change!");
                return;
            }
        };
    }

    function Clear() {
        setField(createEmptyField());
        setGameIsDone(false);
        setIsCrossMove(true);
    }

    useEffect(() => {
        const winPatterns = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal 1
            [2, 4, 6]  // Diagonal 2
        ];
    
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (field[a] && field[a] === field[b] && field[a] === field[c]) {
                alert(field[a] + " won, now you can clear board and start game again!");
                setGameIsDone(true);
            }
        }
    
        if (!field.includes('')) {
            alert("Draw, none won, you can clear board and start game again.");
            setGameIsDone(true);
        }
    }, [field]);

    return (
        <>
            <p>{isCrossMove ? "Cross's move" : "Circle's move"}</p>

            <div className="grid-container">
                {Array(9).fill("").map((_, index) => (
                    <Square key={index} field={field[index]} callback={getCallback(index)}/>
                ))}
            </div>

            <button onClick={Clear}>Clear board</button>
        </>
    )
}

export default TikTakToe;