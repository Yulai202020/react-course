import { useEffect, useState } from 'react'

function Fetch() {
    const [data, setData] = useState<string>("");
    const [click, setClick] = useState<boolean>(true);

    useEffect(() => {
        fetch("http://localhost:4000/html", {

        }).then((res) => res.text()).then((text) => {
            function getData() {
                setData(text);
            }

            setTimeout(getData, 1000);
        })
    }, [click]);

    return (
        <>
            <main>
                {data !== "" ? (
                    <>{data}</>
                ) : (
                    <>Loading ...</>
                )}
            </main>
            <button onClick={() => { setClick(!click); setData("") }}>Refresh</button>
        </>
    )
}

export default Fetch;
