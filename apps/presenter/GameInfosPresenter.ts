import { Board, BoardInfoResponse, GamePresenter } from "../domain";

export type ViewModel = {
    status: string,
    historyMoves: string[],
    board: Board,
}

export class GameInfosPresenter implements GamePresenter<ViewModel, BoardInfoResponse> 
{
    presente(response: BoardInfoResponse): ViewModel 
    {
        const viewModel: ViewModel = {
            board: response.board,
            status: response.winner ? `Winner : ${response.winner}` : `Next player : ${response.player ?? 'X'}`,
            historyMoves: response.history.map(step => (
                step === 0 ? 'Go to game start' : `Go to move #${step}`
            ))
        }

        return viewModel
    }
}

