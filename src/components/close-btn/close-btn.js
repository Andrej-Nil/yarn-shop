import React from "react";
import './close-btn.scss';

const CloseBtn = ({close}) => {
    return (
        <i
            onClick={close}
            className="close-btn"/>
    )
};

export default CloseBtn;
