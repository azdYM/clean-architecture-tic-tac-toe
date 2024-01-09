import { 
	Board,
	GameRepository, 
	GameState, 
} from '@tic-tac-toe/domain'
import { DataSource } from "../source/DataSource"

export class GameRepositoryImp implements GameRepository {
	private dataSource: DataSource

	constructor(dataSource: DataSource) 
	{
		this.dataSource = dataSource
	}

	async getGameState(): Promise<GameState> 
	{
		const history =  this.dataSource.getHistory()
		const allStepNumber = history.steps.map((_, index) => index)

		return {history, allStepNumber}
	}

	async updateGameState(stepIndex: number): Promise<void> {
		const {currentStep} = this.dataSource.getHistory(stepIndex)
		this.dataSource.setHistory(currentStep.board)
	}

	async addStep(board: Board): Promise<void> 
	{
		this.dataSource.setHistory(board)
	}  
}