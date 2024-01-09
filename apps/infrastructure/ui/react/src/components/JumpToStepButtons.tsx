type JumpToStepButtonsViewProps = {
    history: Array<string>,
    onJumpToStep: CallableFunction
}

type JumpButtonProps = {
    description: string,
    move: number,
    onJumpToStep: CallableFunction
}

export const JumpToStepButtonsView = function({history, onJumpToStep}: JumpToStepButtonsViewProps) {
    return <ol>
        {history.map((description, move) => 
            <JumpButton 
                key={move} 
                move={move}
                onJumpToStep={onJumpToStep}
                description={description} 
            />
        )}
    </ol>
}

const JumpButton = function({description, onJumpToStep, move}: JumpButtonProps) {
    return <li>
        <button onClick={() => onJumpToStep(move)}>{description}</button>
    </li>
}