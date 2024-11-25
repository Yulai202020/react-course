interface Probs {
    type: string;
    message: string;
}

function Message({type, message}: Probs) {
    let backgroundColor = "";
    if (type === "primary") {
        backgroundColor
    }
    return (
        <>
        <div style={{
            backgroundColor: type,
        }}>
            {message}
        </div>
        </>
    )
}

export default Message;