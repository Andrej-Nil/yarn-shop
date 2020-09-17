import React from "react";
import './footer-subscription.scss'
import FooterSubscriptionForm from "../footer-subscription-form";

const FooterSubscription = () => {
    return (
        <div className='footer-subscription'>
            <div className='container'>
                <FooterSubscriptionForm/>
            </div>
        </div>
    )
};

export default FooterSubscription;
