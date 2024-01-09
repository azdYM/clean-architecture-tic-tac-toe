export type { Board, Square, Step, Player, History, GameState } from './Entity/Game'
export type { GameRepository } from './repository/GameRepository'
export type { GamePresenter } from './presenter/GamePresenter'
export type { BoardInfoResponse } from './useCases/GetBoardInfosUseCase'

export { clickOnBoard } from './useCases/ClickOnBoardUseCase'
export { getBoardInfos } from './useCases/GetBoardInfosUseCase'
export { jumpToStep } from './useCases/JumpToStepUseCase'