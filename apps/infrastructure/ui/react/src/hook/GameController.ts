import { 
	GameRepository, 
	clickOnBoard, 
	getBoardInfos,
	jumpToStep
} from "@tic-tac-toe/domain"
import { GameInfosPresenter, ViewModel } from "@tic-tac-toe/presenter"
import { useState } from "react"

export const useGameController = function(repository: GameRepository) {
	const [gameInfos, setGameInfos] = useState<ViewModel|null>(null)
    const presenter = new GameInfosPresenter()

	async function play() {
        const gameInfos = await getBoardInfos<ViewModel>(repository, presenter)
		setGameInfos(() => gameInfos)
	}

	if (gameInfos === null) {
		play()
	}

	const handleClickOnBoard = async function(squareIndex: number) {
		await clickOnBoard(squareIndex, repository)
		play()
	}

	const handleJumpToStep = async function(stepIndex: number) {
		await jumpToStep(stepIndex, repository)
		play()
	}

	return {
		gameInfos,
		handleClickOnBoard,
		handleJumpToStep
	}
}

