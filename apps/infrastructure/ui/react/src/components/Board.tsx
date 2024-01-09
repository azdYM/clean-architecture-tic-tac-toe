import { Board } from "@tic-tac-toe/domain"
import { SquareView } from "./Square"

type BoardProps = {
	squares: Board,
	onPlay: CallableFunction
}

export const BoardView = function({squares, onPlay}: BoardProps) {
	return (
		<div className="game-board">
			<div className="board-row">
				<SquareView onClick={() => onPlay(0)} value={squares[0]} />
				<SquareView onClick={() => onPlay(1)} value={squares[1]} />
				<SquareView onClick={() => onPlay(2)} value={squares[2]} />
			</div>
			<div className="board-row">
				<SquareView onClick={() => onPlay(3)} value={squares[3]} />
				<SquareView onClick={() => onPlay(4)} value={squares[4]} />
				<SquareView onClick={() => onPlay(5)} value={squares[5]} />
			</div>
			<div className="board-row">
				<SquareView onClick={() => onPlay(6)} value={squares[6]} />
				<SquareView onClick={() => onPlay(7)} value={squares[7]} />
				<SquareView onClick={() => onPlay(8)} value={squares[8]} />
			</div>
		</div>
	)
}