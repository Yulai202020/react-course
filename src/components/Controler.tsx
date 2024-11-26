import { MouseEventHandler, ReactElement, useState } from "react";

interface Probs {
    isActive: boolean;
    onShow: MouseEventHandler<HTMLButtonElement>;
    children: ReactElement;
}

export function Panel({isActive, onShow, children}: Probs) {
    return (
        <>
            {isActive && children}

            <button onClick={onShow}>Show</button>
        </>  
    );
}

function Controler() {
    const [id, setId] = useState<number>(-1);

    return (
        <div className="centered">
            <Panel isActive={id === 0} onShow={() => {setId(0)}}>
                <div>hello</div>
            </Panel>
            <Panel isActive={id === 1} onShow={() => {setId(1)}}>
                <div>world</div>
            </Panel>
        </div>
    );
}

export default Controler;