import React from "react";
import './header-top-shops.scss'
import ShopShortInfo from "../shop-short-info";

const shops = [
    {
        title: 'Оптовый склад',
        workTime: [
            {time: 'ПН-ПТ: с 10-00 до 17-30'},
            {time: 'СБ: с 10-00 до 15-30'}
        ],
        phones: [
            {
                href: 'tel:+79920021184',
                number: `+7 (992) 002-11-84`
            },
            {
                href: 'tel:+79923421184',
                number: `+7 (992) 342-11-84`
            },
        ],
        address: 'г.Екатерибург, 8 марта 207, стр. 6'
    },

    {
        title: 'Магазин "Пряжа"',
        workTime: [
            {time: 'ПН-ПТ: с 10-00 до 20-00'},
            {time: 'СБ-ВС: с 10-00 до 19-00'}
        ],
        phones: [
            {
                href: 'tel:+73432400770',
                number: `+7 (343) 240-07-70`
            },
            {
                href: 'tel:+79920021184',
                number: `+7 (992) 002-11-84`
            },
        ],
        address: 'г.Екатерибург, ул. Академика Бардина, 32, корп. 1'
    },

    {
        title: 'Магазин в "Пекине"',
        workTime: [
            {time: 'ПН-ВС: с 9-00 до 17-00'}
        ],
        phones: [
            {
                href: 'tel:+79920029999',
                number: `+7 (992) 002-99-99`
            }
        ],
        address: 'г.Екатерибург, Ольховская ул., 2, "ТЦ ПЕКИН"'
    },
];

function renderShops() {
    return shops.map((shop, idx) => {
        return (
            <ShopShortInfo key={`shop${idx}`} shop={shop}/>
        )
    })
}

const shopsElement = renderShops();


const HeaderTopShops = () => {
    return (
        <div className='header-top-shops'>
            {shopsElement}
        </div>
    )
};

export default HeaderTopShops;
