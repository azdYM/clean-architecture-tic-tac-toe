import { Board, Step, History } from "@tic-tac-toe/domain";
import { DataSource } from "./DataSource";


export class OnMemoryDataSourceImpl implements DataSource
{
    private STEP = 'steps'

    setHistory(board: Board): void 
    {
        const data = localStorage.getItem(this.STEP)
        if (data === null) {
            throw new Error("Opération échoué car aucune historique n'a été trouvé")
        }

        const steps: Step[] = JSON.parse(data)

        steps.push({board: board})
        localStorage.steps = JSON.stringify(steps, null, 2)
    }

    getHistory(currentStepIndex?: number): History
    {
        const steps = localStorage.getItem(this.STEP)
        
        if (steps === null) {
            const steps: Step[] = [{board: Array(9).fill(null)}]
            localStorage.setItem(this.STEP, JSON.stringify(steps, null, 2))

            return {steps, currentStep: steps[0]}
        }

        const stepsParsing: Step[] = JSON.parse(steps)
        return {
            steps: stepsParsing, 
            currentStep: stepsParsing[currentStepIndex ?? stepsParsing.length - 1]
        }
    }

    removeHistory(): void 
    {
        localStorage.removeItem(this.STEP)
    } 
}