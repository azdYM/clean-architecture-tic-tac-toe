import { Board, History } from "@tic-tac-toe/domain"


export interface DataSource {
    getHistory(currentStepIndex?: number): History,
    setHistory(board: Board): void
}