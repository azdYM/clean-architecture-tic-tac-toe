import { GameRepository } from ".."

export const jumpToStep = async function(
    stepIndex: number, 
    repository: GameRepository
) {
    const {history} = await repository.getGameState()

    if (stepIndex < history.steps.length) {
        await repository.updateGameState(stepIndex)
    }

    else {
        throw Error(
            `Le numero de l'étape ${stepIndex} doit être plus petit que la taille de l'historique`
        )
    }
}