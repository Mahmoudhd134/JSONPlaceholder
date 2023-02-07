import React from "react";

const Imogy = (props: { shape: string, text: number, onClick: (e: React.MouseEvent) => void }) => {

    return (
        <div
            className={'col-1 d-flex flex-column border border-3 rounded rounded-3 align-items-center m-1'}
            onClick={props.onClick}
        >
            <span>{props.shape}</span> <span>{props.text}</span>
        </div>
    )
};

export default Imogy;