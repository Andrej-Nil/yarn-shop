import React, {useState} from "react";
import './price-type-definition.scss'
import Link from "../../link";

const PriceTypeDefinition = ({desc}) => {

    let [isOpen, definitionOpen] = useState('');

    return (
        <div className='price-type-definition'>
            <i onClick={() => definitionOpen(isOpen = '_open')} className='definition__icon'/>

            <div className={`definition-content ${isOpen}`}>
                <div className='definition-inner'>

                    <i onClick={() => definitionOpen(isOpen = '')} className='definition__close'/>

                    <p className='definition__desc'>{desc}</p>

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
