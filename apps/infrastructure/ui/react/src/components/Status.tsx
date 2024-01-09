
type StatusViewProps = {
    status: string
}

export const StatusView = function({status}: StatusViewProps) {
	return (
		<div className="game-status">
            <div className="status">{status}</div>
        </div>
	)
}