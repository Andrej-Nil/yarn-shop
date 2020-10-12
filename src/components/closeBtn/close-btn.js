import React from "react";
import './close-btn.scss';

const CloseBtn = ({searchChange}) => {
    return (
        <i
            onClick={searchChange}
            className="close-btn"/>
    )
};

export default CloseBtn;
