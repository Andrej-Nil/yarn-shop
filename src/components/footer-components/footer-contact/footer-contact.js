import React from "react";
import './footer-contact.scss'
import FooterPhones from "../footer-phones";
import FooterContactUl from "../footer-contact-ul";
import FooterContactItem from "../footer-contact-item";

const address = [
    {title: 'город:', label: 'Екатерибург.', id: 'city'},
    {title: 'улица:', label: '8 Марта.', id: 'street'},
    {title: 'дом:', label: '207, стр. 6.', id: 'building'}
];

const timeWork = [
    {title: 'ПН-ПТ:', label: 'с 10-00 до 17-30.', id: 'monFri'},
    {title: 'СБ:', label: 'с 10-00 до 15-30.', id: 'sat'},
    {title: 'Воскресенье:', label: 'выходной.', id: 'sun'},
];


const FooterContact = () => {
    return (
        <div className='footer-contact f-contact'>
            <div className='vertical-line'/>
            <h3 className='f-contact__title'>Контактная информация</h3>

            <FooterContactItem title={'Телефоны:'}>
                <FooterPhones/>
            </FooterContactItem>

            <FooterContactItem title={'Адрес оптового склада:'}>
                <FooterContactUl arr={address}/>
            </FooterContactItem>

            <FooterContactItem title={'Время работы:'}>
                <FooterContactUl arr={timeWork}/>
            </FooterContactItem>
        </div>
    )
};

export default FooterContact;
