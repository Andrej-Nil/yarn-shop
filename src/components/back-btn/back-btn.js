import React from "react";
import './back-btn.scss';

const BackBtn = ({back}) => {
    return (
        <i
            onClick={back}
            className='back-btn'/>
    )
};

export default BackBtn;
