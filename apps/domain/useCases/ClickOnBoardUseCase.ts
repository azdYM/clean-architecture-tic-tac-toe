import { GameRepository } from ".."
import { isNextTurnX, calculateWinner } from '../utils/utils'

export const clickOnBoard = async function(
    squareIndex: number, 
    repository: GameRepository
) {
    const {history, allStepNumber} = await repository.getGameState()
    const newBoard = history.currentStep.board.slice()
    const winner = calculateWinner(newBoard)
    
    // Je ne veux pas pouvoir recliqué sur un carré contenant déjà une valeur
    if (newBoard[squareIndex]) {
        return null 
    }

    // S'il y a un gagnant, le jeu s'arrête, plus personne ne peut jouer
    // j'enregistre le gagnant
    if (winner) {
        return null
    }
    
    newBoard[squareIndex] = isNextTurnX(allStepNumber) ? 'X' : 'O'
    await repository.addStep(newBoard)
}

