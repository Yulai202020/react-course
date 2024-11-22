import styles from "../styles/chess.module.scss"
import { useEffect, useState } from "react";
import { Chess } from 'chess.js';

interface Data {
    display: string;
    isWhitePeace: boolean | null;
}

function ChessGame() {
    function createEmptyField() {
        return Array(64).fill({display: "", isWhitePeace: null});
    }

    const chess = new Chess();

    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [fromIsSetted, setFromIsSetted] = useState<boolean>(false);
    const [isWhiteTurn, setIsWhiteTurn] = useState<boolean>(true);

    const [from, setFrom] = useState<number>(-1);
    const [to, setTo] = useState<number>(-1);

    const [field, setField] = useState<Data[]>(createEmptyField());

    const [tiggerFieldInit, setTriggerFieldInit] = useState<boolean>(true);
    const [tiggerMoving, setTriggerMoving] = useState<boolean>(true);

    function isMoveValid(move: string) {
        try {
            chess.move(move);
            return true;
        } catch {
            return false;
        }
    }

    function Clear() {
        setField(createEmptyField());
        setTriggerFieldInit(prev => !prev);
        setIsWhiteTurn(true);
        setIsGameOver(false);
    }

    // set position
    useEffect(() => {
        // base position
        let a = [...field];
    
        a[62] = {display: "K", isWhitePeace: true};
    
        setField(a);
    }, [tiggerFieldInit]);

    // change postion on move
    useEffect(() => {
        if (isGameOver) {
            alert("Game is over, please clear board for starting new game!");
        } else if (to !== -1 && from !== -1) {
            const letters = [ "a", "b", "c", "d", "e", "f", "g", "h" ];
            // get move
            const from_as_needed = letters[(from + 1) % 8 - 1] + (8 - Math.floor(from / 8));
            const to_as_needed = letters[(to + 1) % 8 - 1] + (8 - Math.floor(to / 8));

            const move = from_as_needed+to_as_needed;

            // check if its legit or game over

            if (isMoveValid(move)) {
                let tmpField = [...field];
        
                tmpField[to] = tmpField[from];
                tmpField[from] = {display: "", isWhitePeace: null};
        
                setField(tmpField);
        
                // clear
                setTo(-1);
                setFrom(-1);

                // is gg
                if (chess.isGameOver()) {
                    // check someone gg
                    if (chess.isCheckmate()) {
                        const winner = chess.turn() === 'w' ? 'Black' : 'White';
                        alert(`${winner} wins by checkmate!`);
                    }

                    // check draw
                    if (chess.isStalemate()) {
                        alert('Stalemate! The game is a draw.');
                    } else if (chess.isInsufficientMaterial()) {
                        alert('Insufficient material! The game is a draw.');
                    } else if (chess.isThreefoldRepetition()) {
                        alert('Threefold repetition! The game is a draw.');
                    } else {
                        alert('The game ended in a draw for another reason.');
                    }

                    setIsGameOver(true);
                }

                setIsWhiteTurn(prev => !prev);
            } else {
                alert("Sorry but its illigal move!");
            }
        }
    }, [tiggerMoving])

    return (
        <>
        <p>{isWhiteTurn ? "White move" : "Blacks move"}</p>

        <div className={styles.container}>
            {field.map((item, index) => (
                <button key={index} className={styles.square} onClick={() => {

                    if (fromIsSetted) {
                        setTo(index);
                        setFromIsSetted(false);

                        // trig changing
                        setTriggerMoving(prev => !prev);
                    } else {
                        if (item.display === "" || item.isWhitePeace !== isWhiteTurn) {
                            alert("Its not your peace!");
                        } else {
                            setFrom(index);
                            setFromIsSetted(true);
                        }
                    }
                }}>{item.display}</button>
            ))}
        </div>

        <button onClick={Clear}>Clear</button>
        </>
    )
}

export default ChessGame;