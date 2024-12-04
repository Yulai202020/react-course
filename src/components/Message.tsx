interface Probs {
    type: string;
    message: string;
}

function Message({type, message}: Probs) {
    let red = 0; let green = 0; let blue = 0;
    
    switch (type) {
        case "primary":
            green = 102;
            blue = 255;
            break;
        case "error":
            red = 255;
            break;
        case "message":
            green = 255;
            break;
        default:
            // also primary
            red = 0;
            green = 102;
            blue = 255;
            break;
    }

    return (
        <>
        <div style={{
            backgroundColor: `rgba(${red}, ${green}, ${blue}, 25%)`,
            color: `rgba(${red}, ${green}, ${blue}, 100%)`,
            borderRadius: "5px",
            padding: "12px",
            maxWidth: "500px",
        }}>
            {message}
        </div>
        </>
    )
}

export default Message;