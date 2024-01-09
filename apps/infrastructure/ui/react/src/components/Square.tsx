import { Square } from "@tic-tac-toe/domain"

type SquareProps = {
	value: Square,
	onClick: CallableFunction
}

export const SquareView = function({value, onClick}: SquareProps) {
	return (
		<button onClick={() => onClick()} className="square">{value}</button>
	)
}