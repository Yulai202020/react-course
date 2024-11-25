import styles from "../styles/chess.module.scss"
import { useEffect, useRef, useState } from "react";
import { Chess } from 'chess.js';
import Message from "./Message";

interface Data {
    display: string;
    isWhitePeace: boolean | null;
}

function isUppercase(char: string) {
    return char === char.toUpperCase();
}

function isLowercase(char: string) {
    return char === char.toLowerCase();
}

function createEmptyField() {
    return Array(64).fill({display: "", isWhitePeace: null});
}

function getAllSquares() {
    const squares = [];
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

    for (let rank of ranks) {
        for (let file of files) {
            squares.push(file + rank);
        }
    }
    return squares;
}

function ChessGame() {
    const chess = useRef(new Chess());

    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [fromIsSetted, setFromIsSetted] = useState<boolean>(false);

    const [from, setFrom] = useState<number>(-1);
    const [to, setTo] = useState<number>(-1);

    const [field, setField] = useState<Data[]>(createEmptyField());

    const [tiggerFieldInit, setTriggerFieldInit] = useState<boolean>(true);
    const [tiggerMoving, setTriggerMoving] = useState<boolean>(true);
    
    const [selectedId, setSelectedId] = useState<number>(-1);

    const [message, setMessage] = useState({
        message: "",
        type: ""
    });


    function isMoveValid(from: string, to: string) {
        try {
            const getMove = chess.current.move({from: from, to: to});
            return !(getMove === null);
        } catch {
            return false;
        }
    }

    function Clear() {
        setField(createEmptyField());
        setTriggerFieldInit(prev => !prev);
        chess.current.reset();
        setIsGameOver(false);
        setMessage({
            message: "",
            type: ""
        })
    }

    // set position
    useEffect(() => {
        // base position
        let BaseField = [...field];
        const board = chess.current.board();
        const squares = getAllSquares();

        squares.map((item, id) => {
            const piece = board.flat().find(s => s?.square === item);
            let color: boolean | null;

            if (piece?.color === "w") {
                color = true;
            } else if (piece?.color === "b") {
                color = false;
            } else {
                color = null;
            }

            BaseField[id] = {display: piece?.type === undefined ? "" : (piece.color === "b" ? piece.type : piece.type.toUpperCase()) , isWhitePeace: color};
        });
    
        setField(BaseField);
    }, [tiggerFieldInit]);

    // change postion on move
    useEffect(() => {
        if (isGameOver) {
            setMessage({message: "Game is over, please clear board for starting new game!", type: "primary"});
        } else if (to !== -1 && from !== -1) {
            const letters = [ "a", "b", "c", "d", "e", "f", "g", "h" ];

            // get move
            const from_as_needed = letters[from % 8] + (8 - Math.floor(from / 8));
            const to_as_needed = letters[to % 8] + (8 - Math.floor(to / 8));

            // check if its legit or game over

            if (isMoveValid(from_as_needed, to_as_needed)) {
                
                let tmpField = [...field];
        
                tmpField[to] = tmpField[from];
                tmpField[from] = {display: "", isWhitePeace: null};
        
                setField(tmpField);
        
                // clear
                setTo(-1);
                setFrom(-1);

                // is gg
                if (chess.current.isGameOver()) {
                    // check someone gg
                    if (chess.current.isCheckmate()) {
                        const winner = chess.current.turn() === 'w' ? 'Black' : 'White';
                        setMessage({message: `${winner} wins by checkmate!`, type: "message"});
                    }

                    // check draw
                    if (chess.current.isStalemate()) {
                        setMessage({message: "Stalemate! The game is a draw.", type: "message"});
                    } else if (chess.current.isInsufficientMaterial()) {
                        setMessage({message: "Insufficient material! The game is a draw.", type: "message"});
                    } else if (chess.current.isThreefoldRepetition()) {
                        setMessage({message: "Threefold repetition! The game is a draw.", type: "message"});
                    }

                    setIsGameOver(true);
                }
            } else {
                setMessage({message: "Sorry but its illigal move!", type: "error"});
            }
        }
    }, [tiggerMoving]);

    return (
        <>
        <p>{chess.current.turn() === "w" ? "White move" : "Blacks move"}</p>

        <div className={styles.container}>
            {field.map((item, index) => (
                <button key={index} className={styles.square} style={{backgroundColor: index == selectedId ? "orange" : ""}} onClick={() => {

                    if (fromIsSetted) {
                        if (
                            ((chess.current.turn() === "w" && isUppercase(item.display)) ||
                            (chess.current.turn() === "b" && isLowercase(item.display)))
                            && item.display !== "") {
                            setSelectedId(index);
                            setFrom(index);
                        } else {
                            setTo(index);
                            setFromIsSetted(false);

                            // trig changing
                            setTriggerMoving(prev => !prev);

                            setSelectedId(-1);
                        }
                    } else {
                        if (item.display === "" || item.isWhitePeace !== (chess.current.turn() === "w")) {
                            setMessage({message: "Its not your peace!", type: "error"});
                        } else {
                            setSelectedId(index);

                            setFrom(index);
                            setFromIsSetted(true);
                        }
                    }
                }}>{item.display}</button>
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

        <button onClick={Clear}>Clear</button>
        </>
    )
}

export default ChessGame;