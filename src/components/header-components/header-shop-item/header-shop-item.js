import React from "react";
import './header-shop-item.scss'

const HeaderShopItem = ({info}) => {
    const {title, item} = info;

    function renderInfo() {
        return item.map( ({value, id}) => {
            return (
               <p className='shop-item-info__desc' key={id}>{value}</p>
            )
        })
    }

    const infoItem = renderInfo();
    return (
        <div key={item.id} className='header-shop-item'>
            <span className='shop-item__title'>{title}</span>
            <div className='shop-item-info'>
                {infoItem}
            </div>
        </div>
    )
};

export default HeaderShopItem;
