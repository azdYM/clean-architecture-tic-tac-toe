export interface GamePresenter<ViewModel, Response> {
    presente(response: Response): ViewModel
}