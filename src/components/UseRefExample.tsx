import { useRef, useState } from "react";

function UseRefExample() {
    const [someVal, setSomeVal] = useState<number>(0);
    const ref = useRef<number>(0); // при изменение рефа не произходит ре-рендер и при ре-рендере реф не изменяется
    console.log(ref.current); // это значение

    // на пример нужен счётчик но не должно быть ре-рендера и при ре-рендере значение не должно потерятся

    function handleClick() {
        ref.current = ref.current + 1;
        alert("You clicked "+ref.current+" times!");
    }

    function handleReRender() {
        setSomeVal(prevVal => prevVal+1);
    }

    return (
        <div className="centered">
            <p>{someVal}</p>
            <p>{ref.current}</p>
            <button onClick={handleClick}>
                Increment
            </button>

            <button onClick={handleReRender}>Re-Render</button>
        </div>
    )
}

export default UseRefExample;