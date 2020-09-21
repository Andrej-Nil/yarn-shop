import React from "react";
import './footer-phones.scss'
import Link from "../../link";

const FooterPhones = () => {
    return (
        <div className='f-contact-phones'>

            <Link
                cls='f-contact-phone__link'
                href={`tel:+79920021184`}
                content={`+7 (992) 002-11-84`} />

            <Link
                cls='f-contact-phone__link'
                href={`tel:+79923421184`}
                content={`+7 (992) 342-11-84`} />
        </div>
    )
};

export default FooterPhones;
