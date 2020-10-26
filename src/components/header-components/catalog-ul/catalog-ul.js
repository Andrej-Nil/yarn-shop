import React from "react";
import './catalog-ul.scss'
import Link from "../../link";

const CatalogUl = ({categoryItem}) => {
    if(!categoryItem) return null;
    function renderItem() {
        return categoryItem.map( (item) => {
            const {id, href, label} = item;

            return (
                <li key={id} className='catalog-li _col-li-item'>
                    <Link href={href}
                          cls='catalog-li__link _col-item-link'
                          content={label} />
                </li>
            )
        })
    }

    const itemList = renderItem();
    return (
        <ul className="catalog-ul">
            {itemList}
        </ul>
    )
};

export default CatalogUl;
