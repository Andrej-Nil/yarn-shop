import React  from 'react';
import './form-input-btn.scss'
import SpinnerPlaceholder from "../spinnerPlaceholder";

const FormInputBtn = ({placeholder, loading, label}) => {
        const spinner = loading ? <SpinnerPlaceholder/> : null;
        return (
            <form className='form-input-btn'>
                    {spinner}
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
