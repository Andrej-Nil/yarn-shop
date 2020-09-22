import React from "react";
import './footer-nav.scss'
import FooterNavCol from "../footer-nav-col";

const linkList = [
    {
        title: 'Покупателю',
        links: [
            {href: '#!', label: 'Оплата', id: 'payment'},
            {href: '#!', label: 'Цена', id: 'price'},
            {href: '#!', label: 'Скидки', id: 'discounts'},
            {href: '#!', label: 'Розничная продажа', id: 'retail'},
            {href: '#!', label: 'Доставка', id: 'delivery'},
            {href: '#!', label: 'Переводы на карту', id: 'toСard'},
            {href: '#!', label: 'Разпродажа', id: 'sale'},
            {href: '#!', label: 'Возврат', id: 'return'},
            {href: '#!', label: 'Предложения', id: 'suggestions'},
        ],
        id: "toBuyer"
    },

    {
        title: 'Компания',
        links: [
            {href: '#!', label: 'О нас', id: 'aboutUs'},
            {href: '#!', label: 'Новости', id: 'news'},
            {href: '#!', label: 'Вакансии', id: 'vacancy'},
            {href: '#!', label: 'Наше производство', id: 'productions'},
        ],
        id: "company"
    },
    {
        title: 'Прочее',
        links: [
            {href: '#!', label: 'Сотруднечество', id: 'cooperation'},
            {href: '#!', label: 'Ваши предложения', id: 'sentence'},
            {href: '#!', label: 'Оставить отзыв', id: 'review'},
            {href: '#!', label: 'Поступление на склад', id: 'receipt'},
        ],
        id: "other"
    }
];

function renderUl() {
    return linkList.map( (item) => {
        return <FooterNavCol key={item.id} item={item} />
    })
}

const ul = renderUl();

const FooterNav = () => {
    return (
        <nav className='footer-nav'>
            {ul}
        </nav>
    )
};

export default FooterNav;
