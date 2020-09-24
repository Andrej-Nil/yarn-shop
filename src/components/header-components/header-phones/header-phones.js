import React from "react";
import './header-phones.scss';
import Link from "../../link";

const HeaderPhones = () => {
    return (
        <div className='header-phones'>
            <p className='ht-phones-title'>
                Оптовый склад:
            </p>
            <div className='ht-phones'>
                <Link
                    cls='phone-link'
                    href={`tel:+79920021184`}
                    content={`+7 (992) 002-11-84`} />
                <Link
                    cls='phone-link'
                    href={`tel:+79923421184`}
                    content={`+7 (992) 342-11-84`} />
            </div>
        </div>
    )
};

export default HeaderPhones;
