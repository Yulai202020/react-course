import { Chess } from 'chess.js';


const chess = new Chess();

function makeMove(move: string) {
    try {
        chess.move(move);
        return true;
    } catch {
        return false;
    }
}

makeMove("g1f3");
makeMove("g8f6");

console.log(chess.board());