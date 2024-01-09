import { GameRepositoryImp, OnMemoryDataSourceImpl } from "@tic-tac-toe/data"
import { BoardView } from "../components/Board"
import { useGameController } from "../hook/GameController"
import { StatusView } from "../components/Status"
import { JumpToStepButtonsView } from "../components/JumpToStepButtons"

export const Game = function() {
	const dataSource = new OnMemoryDataSourceImpl
	const repository = new GameRepositoryImp(dataSource)
	const {gameInfos, handleClickOnBoard, handleJumpToStep} = useGameController(repository)

	if (gameInfos === null) {
		return null
	}

	return (
		<div className="tic-tac-toe-game">
			<div>
				<StatusView status={gameInfos.status} />
				<BoardView 
					squares={gameInfos.board} 
					onPlay={handleClickOnBoard} 
				/>
			</div>
			<JumpToStepButtonsView 
				history={gameInfos.historyMoves} 
				onJumpToStep={(move: number) => handleJumpToStep(move)}
			/>
		</div>
	)
}



