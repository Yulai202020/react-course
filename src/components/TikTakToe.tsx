import { useEffect, useState } from "react"
import styles from "../styles/tiktaktoe.module.scss"
import { MouseEventHandler } from "react";
import Message from "./Message";

interface Probs {
    field: string;
    callback: MouseEventHandler<HTMLButtonElement>;
}

export function Square({field, callback}: Probs) {
    return (
        <button onClick={callback} className={styles.square}>{field}</button>
    )
}

function createEmptyField() {
    return Array(9).fill("");
}

function TikTakToe() {
    const [gameIsDone, setGameIsDone] = useState<boolean>(false);
    const [isCrossMove, setIsCrossMove] = useState<boolean>(true);
    const [field, setField] = useState<string[]>(createEmptyField());

    const [message, setMessage] = useState({
        message: "",
        type: ""
    });

    function getCallback(id: number) {
        return () => {
            if (gameIsDone) {
                setMessage({message: "Game is over, please clear board for starting new game!", type: "primary"});
                return;
            } else if (field[id] === "") {
                let tmpField = [...field];
                tmpField[id] = isCrossMove ? "X" : "O";
                setField(tmpField);
                setIsCrossMove(prev => !prev)
                return;
            } else {
                setMessage({message: "You cant change!", type: "error"});
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
                setMessage({message: field[a] + " won, now you can clear board and start game again!", type: "message"});
                setGameIsDone(true);
            }
        }
    
        if (!field.includes('')) {
            setMessage({message: "Draw, none won, you can clear board and start game again.", type: "message"});
            setGameIsDone(true);
        }
    }, [field]);

    return (
        <div className="centered">
            <p>{isCrossMove ? "Cross's move" : "Circle's move"}</p>

            <div className={styles.container}>
                {Array(9).fill("").map((_, index) => (
                    <Square key={index} field={field[index]} callback={getCallback(index)}/>
                ))}
            </div>

            {message.message !== "" && (
                <div>
                    <Message message={message.message} type={message.type}/>
                    <button onClick={() => {
                        setMessage({
                            message: "",
                            type: ""
                        });
                    }}>Clear messages</button>
                </div>
            )}

            <button onClick={Clear}>Clear board</button>
        </div>
    )
}

export default TikTakToe;

alert