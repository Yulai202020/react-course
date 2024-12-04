import { useState } from "react";

function UseStateExample() {
    const [number, setNumber] = useState(0);

    return (
        <div className="centered">
            {number}
            <button onClick={() => {
                setNumber(number + 1); // представим что react заменяет number на 0
                setNumber(number + 1); // то тогда это заменит тоже number на 1

                // что бы не заминить state а прибать нужно использовать callback функцию

                setNumber(n => n + 1); // прибовляет 1

                alert(number); // хуть мы изменили number но все равно 0 потому что мы сделали этот alert в данном рендере где number 0

                // так что number теперь 2
            }}>Add 1</button>  {/* при нажатии кнопки state изменится и react перересует компонент */}
        </div>
    )
}

export default UseStateExample;