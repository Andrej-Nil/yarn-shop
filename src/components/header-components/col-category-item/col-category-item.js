import React from "react";
import './col-category-item.scss'
import Link from "../../link";
import CatalogUl from "../catalog-ul";

const ColCategoryItem = ({categoryList}) => {
    const {id, href, category, categoryItem} = categoryList;

    return (
        <li key={id} className='col-category-item _col-li-item'>
            <Link href={href}  cls={'col-category__link _col-item-link'}
                  content={category}/>
            <CatalogUl categoryItem={categoryItem}/>

        </li>
    )
};

export default ColCategoryItem;
