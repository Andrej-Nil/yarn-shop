import React from "react";
import './header-addresses-shops.scss'
import HeaderShop from "../header-shop";

const shops = [
    {
        title: 'Оптовый склад',
        desc: 'Оптова-розничная продажа. Минимальный лот - упаковка.',
        info: [
            {
                title: 'Время работы:',
                item: [
                    {value: 'ПН-ПТ: с 10-00 до 17-30', id: 'MonFri' },
                    {value: 'СБ: с 10-00 до 15-30', id: 'sat'},
                    {value: 'ВС: выходной', id: 'sun'},
                ],
                id: 'workTime'
            },
            {
                title: 'Телефон:',
                item: [
                    {value: `+7 (992) 002-11-84`, id: 'phone1'},
                    {value: `+7 (992) 342-11-84`, id: 'phone2'},
                ],
                id: 'phones'
            },
            {
                title: 'Адрес:',
                item: [
                    {value: 'г.Екатерибург, 8 марта 207, стр. 6', id: 'address'}
                ],
                id: 'address'
            },
        ],
        id: 'mainWarehouse',
    },
    {
        title: 'Магазин "Пряжа"',
        desc: 'Розничная продажа. Минимальный лот - моток.',
        info: [
            {
                title: 'Время работы:',
                item: [
                    {value: 'ПН-ПТ: с 10-00 до 17-30', id: 'MonFri' },
                    {value: 'СБ-ВС: с 10-00 до 19-00', id: 'sat'},
                ],
                id: 'workTime'
            },
            {
                title: 'Телефон:',
                item: [
                    {value: `+7 (343) 240-07-70`, id: 'phone1'},
                    {value: `+7 (992) 002-11-84`, id: 'phone2'},
                ],
                id: 'phones'
            },
            {
                title: 'Адрес:',
                item: [
                    {value: 'г.Екатерибург, ул. Академика Бардина, 32, корп. 1', id: 'address'}
                ],
                id: 'address'
            },

        ],
        id: 'yarnShop'
    },
    {
        title: 'Магазин в "Пекине"',
        desc: 'Розничная продажа. Минимальный лот - моток.',
        info: [
            {
                title: 'Время работы:',
                item: [
                    {value: 'ПН-ВС: с 9-00 до 17-00', id: 'MonFri' },
                ],
                id: 'workTime'
            },
            {
                title: 'Телефон:',
                item: [
                    {value: `+7 (992) 002-99-99`, id: 'phone1'}
                ],
                id: 'phones'
            },
            {
                title: 'Адрес:',
                item: [
                    {value: 'г.Екатерибург, Ольховская ул., 2, "ТЦ ПЕКИН"', id: 'address'}
                ],
                id: 'address'
            },

        ],
        id: 'pekinShop'
    },
];


function renderShops() {
    return shops.map((shop) => {
        return (
            <HeaderShop key={shop.id} shop={shop}/>
        )
    })
}

const shopsElement = renderShops();


const HeaderAddressesShops = () => {
    return (
        <div className='header-addresses-shops'>
            {shopsElement}
        </div>
    )
};

export default HeaderAddressesShops;
