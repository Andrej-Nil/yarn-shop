import React, {Component} from "react";
import './catalog.scss';
import CatalogList from "../gatalog-list";
import Link from "../link";

export default  class Catalog extends Component{
    state = {
        catalogList: [
            {
                category: 'Турецкая пряжа',
                subcategory: [
                    {label: 'Alize', href:'#!', id: 'alize'},
                    {label: 'YarnArt', href:'#!', id: 'yarnArt'},
                    {label: 'Nako', href:'#!', id: 'nako'},
                    {label: 'Gazzal', href:'#!', id: 'gazzal'},
                    {label: 'Himalaya', href:'#!', id: 'himalaya'}
                ],
                href: '#!',
                id: 'turkishYarn'
            },

            {
                category: 'Российская пряжа',
                subcategory: [
                    {label: 'Пехорский текстиль', href:'#!', id: 'pethorka'},
                    {label: 'ПНК им.Кирова', href:'#!', id: 'pnkKirova'},
                    {label: 'Семеновская фабрика', href:'#!', id: 'semenovskaya'},
                    {label: 'Троицкая фабрика', href:'#!', id: 'troitskaya'},
                ],
                href: '#!',
                id: 'russianYarn'
            }
        ]
    };

    render() {

        const { catalogList } = this.state;
        const catalogBtn = (
            <div className='catalog-btn'>
                <span>
                    Каталог товаров
                </span>
                <i className='catalog__icon'/>
            </div>
        );
            return (
            <div className='catalog'>
                <Link href={'#!'}
                      cls={"catalog__link"}
                      content={catalogBtn}/>
                <CatalogList catalogList={catalogList}/>
            </div>
        )
    }

};
