import React from "react";
import './footer-subscription.scss'
import FormInputBtn from "../../form-input-btn";

const FooterSubscription = () => {
    return (
        <div className='footer-subscription'>
            <div className='footer-subscription-inner container'>
                <p className='f-subscript-form__desc'>
                    Подпишись, чтобы быть в курсе новых поступлений и акций!
                </p>

                <div className="f-subscript-form">
                    <FormInputBtn
                        placeholder={'Введите свой E-mail'}
                        label={'Подписаться'}/>
                </div>
            </div>
        </div>
    )
};

export default FooterSubscription;
