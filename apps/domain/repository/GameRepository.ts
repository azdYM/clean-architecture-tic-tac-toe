import { Board, GameState } from "../Entity/Game"

export interface GameRepository {
    getGameState(): Promise<GameState> 
    updateGameState(stepIndex: number): Promise<void>
    addStep(step: Board): Promise<void>
}