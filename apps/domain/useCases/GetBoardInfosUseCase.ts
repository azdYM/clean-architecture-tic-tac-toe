import { Board, GamePresenter, GameRepository, Player, Square } from "..";
import { isNextTurnX, calculateWinner } from '../utils/utils'

export type BoardInfoResponse = {
    winner: Square,
    player: Player,
    history: number[],
    board: Board
}

export const getBoardInfos = async function<T>(
    repository: GameRepository, 
    presenter: GamePresenter<T, BoardInfoResponse>
) {
    const {history, allStepNumber} = await repository.getGameState()
    const winner = calculateWinner(history.currentStep.board)
    const player = isNextTurnX(allStepNumber) ? "X" : "O"

    return presenter.presente({
        board: history.currentStep.board, 
        history: allStepNumber,
        winner, 
        player, 
    })
}

