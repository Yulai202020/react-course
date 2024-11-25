interface Probs {
    type: string;
    message: string;
}

function Message({type, message}: Probs) {

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