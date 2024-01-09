export type Board = Square[]

export type Square = ('X' | 'O' | null)

export type Player = ('X' | 'O')

export type GameState = {
    history: History,
    allStepNumber: number[] 
}

export type History = {
    steps: Step[],
    currentStep: Step
}

export type Step = {
    board: Board,
}