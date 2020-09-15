import React from "react";
import './price-type-definition.scss'
import Link from "../../link";

const PriceTypeDefinition = ({isWholesale}) => {

    const wholesaleDesc = ( <p className='definition__desc'>Цена товара при закупки от 5&nbsp;000 рублей. Расчет суммы идет исхотя из оптовой цены товара.</p>);
    const retailDesc = (<p className='definition__desc'>Цена товара при закупки менее 5&nbsp;000 рублей. Розничная цена выше оптовой на 30%.</p>);

    const desc = isWholesale ? wholesaleDesc : retailDesc;

    return (
        <div className='price-type-definition'>
            <i className='definition__icon'/>
            <div className="definition-content">
                <div className='definition-inner'>
                    {desc}
                    <Link href='#!' cls='definition__link' content='подробнее'/>
                </div>
                <div className='triangle-wrap _triangle-front'>
                    <div className='triangle'/>
                </div>
                <div className='triangle-wrap _triangle-back'>
                    <div className='triangle _triangle-shadow'/>
                </div>
            </div>
        </div>
    )
};

export default PriceTypeDefinition;
