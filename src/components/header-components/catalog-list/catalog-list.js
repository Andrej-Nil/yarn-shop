import React from "react";
import './catalog-list.scss';
import ColCategoryItem from "../col-category-item";

const CatalogList = ({catalog}) => {
    function renderCategory() {
        return catalog.map( (categoryList) => {
            return(
                <ColCategoryItem key={categoryList.id}
                    categoryList={categoryList}/>
            )
        })
    }

    const category = renderCategory();

    return (
        <nav className='catalog-list'>
            <ul className='catalog-col-category _col-catalog'>
                {category}
            </ul>
        </nav>
    )
};



export default CatalogList;
