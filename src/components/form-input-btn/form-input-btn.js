import React  from 'react';
import './form-input-btn.scss'

const FormInputBtn = ({placeholder, label}) => {
        return (
            <form className='form-input-btn'>
                <input type="text"
                       className='input _radius-left'
                       placeholder={placeholder}/>
                <button
                    className='btn _blueBtn _radius-right'>
                    {label}
                </button>
            </form>
        )
};

export default FormInputBtn;
