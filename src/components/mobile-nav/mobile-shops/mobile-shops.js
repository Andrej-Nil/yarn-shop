import React from "react";
import './mobile-shops.scss';
import ServerPlug from "../../../server-plug";


const MobileShops = () => {
    const serverPlug = new ServerPlug();
    const shops = serverPlug.shops;

    function renderLi() {
        return shops.map((item) => {
            const {title, href, id,  info} = item;
            const address = info[info.length-1].item[0].value;
            return (
                <li key={id} className='mobile-shops__li shops-li'>
                    <a href={href} className='shops-li__link'>
                        <h4 className='shops-li__title'>{title}</h4>
                        <p className='shops-li__desc'>{address}</p>
                        <span className='fake-link'>Показать на карте</span>
                    </a>
                </li>
            )
        })
    }

    const liItems = renderLi();

        return (
                <ul className='mobile-shops-ul'>
                    {liItems}
                </ul>
        )
};

export default MobileShops;


