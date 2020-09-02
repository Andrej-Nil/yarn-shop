import React from "react";
import './shop-short-info.scss'
import Link from "../link";

const ShopShortInfo = ({shop}) => {
    const {title, workTime, phones, address} = shop;

    const time = workTime.map((item, idx) => {
        const {time} = item;
        return (
            <span key={`workTime${idx}`} className='info-item__desc'>{time}</span>
        )
    });

    const phoneNumber = phones.map((phone, idx) => {
        const {href, number} = phone;
        return <Link
            key={`phone${idx}`}
            cls='info-item__desc'
            href={href}
            content={number} />
    });
    return (
        <div className="shop-short-info">
            <h3 className='shop-short-info__title'>{title}</h3>

            <div className='short-info-item'>
                <span className='info-item__title'>Время работы:</span>
                {time}
            </div>
            <div className='short-info-item'>
                <span className='info-item__title'>Телефон:</span>
                {phoneNumber}
            </div>

            <div className='short-info-item'>
                <span className='info-item__title'>Адрес:</span>
                <span>{address}</span>
            </div>

            <Link
                cls='item-info__link'
                href={`#!`}
                content={`Показать на карте`} />
        </div>
    )
};

export default ShopShortInfo;
