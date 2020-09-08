import React from "react";
import './col-category-item.scss'
import Link from "../link";

const ColCategoryItem = ({categoryItem}) => {
    const {id, href, category, subcategory} = categoryItem;

    function renderSubcategoryItem() {
        return subcategory.map( (subcategoryItem) => {
            const {id, href, label} = subcategoryItem;
            return (
                <li key={id} className='col-subcategory-item _col-li-item'>
                    <Link href={href}
                          cls='col-subcategory__link _col-item-link'
                          content={label} />
                </li>
            )
        })
    }

    const subcategoryItem = renderSubcategoryItem();
    return (
        <li key={id} className='col-category-item _col-li-item'>
            <Link href={href}  cls={'col-category__link _col-item-link'}
                  content={category}/>

            <ul className='col-subcategory'>
                {subcategoryItem}
            </ul>
        </li>
    )
};

export default ColCategoryItem;
