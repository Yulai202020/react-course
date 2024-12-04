interface Probs {
    url: string,
    alt: string,
}

export function Children({url, alt}: Probs) {
    return (
        <>
            <img src={url} alt={alt} style={{borderRadius: "50%"}}/>
        </>
    )
}

function Parent() {
    return (
        <div className="centered">
            <Children url="https://picsum.photos/50/50" alt="small picture"/>
            <Children url="https://picsum.photos/100/100" alt="normal picture"/>
            <Children url="https://picsum.photos/500/500" alt="big picture"/>
        </div>
    )
}

export default Parent;