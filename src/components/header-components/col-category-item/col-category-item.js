import React from "react";
import './col-category-item.scss'
import Link from "../../link";
import CatalogUl from "../catalog-ul";

const ColCategoryItem = ({categoryList}) => {
    const {id, url, category, categoryItem} = categoryList;

    return (
        <li key={id} className='col-category-item _col-li-item'>
            <Link href={url}  cls={'col-category__link _col-item-link'}
                  content={category}/>
            <CatalogUl categoryItem={categoryItem}/>

        </li>
    )
};

export default ColCategoryItem;
