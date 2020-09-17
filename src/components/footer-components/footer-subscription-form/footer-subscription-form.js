import React from "react";
import './footer-subscription-form.scss'

const FooterSubscriptionForm = () => {
    return (
        <div className='footer-subscription-form'>
            <p className='f-subscript-form__desc'>
                Подпишись, чтобы быть в курсе новых поступлений и акций!
            </p>

            <form className='f-subscript-form'>
                <input type="text"
                       className="f-subscript-form__input input"
                       placeholder='Введите E-mail'
                />
                <button className='f-subscript-form__btn btn _blueBtn'>ПОДПИСАТЬСЯ</button>
            </form>
        </div>
    )
};

export default FooterSubscriptionForm;
