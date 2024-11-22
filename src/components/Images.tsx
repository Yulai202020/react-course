interface Probs {
    url: string,
    alt: string,
}

export function Image({url, alt}: Probs) {
    return (
        <>
            <img src={url} alt={alt} style={{borderRadius: "50%"}}/>
        </>
    )
}

function Images() {
    return (
        <>
            <Image url="https://picsum.photos/50/50" alt="small picture"/>
            <Image url="https://picsum.photos/100/100" alt="normal picture"/>
            <Image url="https://picsum.photos/500/500" alt="big picture"/>
        </>
    )
}

export default Images;