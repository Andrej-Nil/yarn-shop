import React from "react";
import './error-message.scss'

const ErrorMessage = () => {
    const knotIcon = './image/knot-error.svg';
    return (
        <div className="error-message">
            <img className='error-icon' src={knotIcon} alt="Ошибка"/>
            <p className='error-text'>
                Что то пошло не так,<br/>
                но мы уже устраняем проблему.<br/>
                Попробуте еще раз через некоторое время!
            </p>
        </div>
    )
};

export default ErrorMessage;
