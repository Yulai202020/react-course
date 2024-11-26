import { useEffect } from "react";

function UseEffectExample() {
    useEffect(() => {
        console.log("hello world");
    }, []); // в квадратных скобках пишутся зависемости при изменения 1 из них функция в нутри useEffect запускается ещё раз
    // если квадратные скобки пусты то тогда useEffect запускает только при первом рендере
    // если квадратных скобок вообще нету то useEffect запустает при ре-рендере

    // функция в useEffect может возрощать функцию де-структер.

    return (
        <>
        </>
    )
}

export default UseEffectExample;