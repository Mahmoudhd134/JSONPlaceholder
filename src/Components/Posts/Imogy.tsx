import React, {useRef} from "react";

const Imogy = (props: { shape: string, text: number, onClick: (e: React.MouseEvent) => void }) => {
    const imogy = useRef() as React.MutableRefObject<HTMLDivElement>

    return (
        <div
            className={'col-1 d-flex flex-column border border-3 rounded rounded-3 align-items-center m-1'}
            ref={imogy}
            onClick={props.onClick}
            style={{cursor: 'grab'}}
            onMouseDown={e => {
                e.preventDefault()
                imogy.current.style.cursor = 'grabbing'
            }}
            onMouseUp={e => {
                e.preventDefault()
                imogy.current.style.cursor = 'grab'
            }}>
            <span>{props.shape}</span> <span>{props.text}</span>
        </div>
    )
};

export default Imogy;