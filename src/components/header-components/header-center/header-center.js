import React from "react";
import './header-center.scss'
import Link from "../../link";
import FormInputBtn from "../../form-input-btn";
import HeaderUserMenu from "../header-user-menu";
import SearchMobileIcon from "../search-mobail-icon";

const HeaderCenter = () => {
    return (
        <div className="header-center hc">
            <div className='container hc-inner'>
                <Link
                    cls='hc__promo btn _redBtn'
                    href='#!'
                    content='Акции'
                />

                <Link
                    cls='catalog__mobile btn'
                    href='#!'
                    content='Каталог'
                />

                <div className='header-search'>
                    <FormInputBtn
                        placeholder={'alize'} label={'Найти'}/>
                </div>

                <div className='search-mobile-icon-wrap'>
                    <SearchMobileIcon/>
                </div>

                <HeaderUserMenu/>
            </div>
        </div>
    )
};

export default HeaderCenter;
