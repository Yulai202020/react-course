import UseConnection from "./UseConnection"

function UsingCustomHook() {
    const [isConnected] = UseConnection();

    return (
        <div className="centered">
            <p>{isConnected ? "Online" : "Offline"}</p>
        </div>
    )
}

export default UsingCustomHook;