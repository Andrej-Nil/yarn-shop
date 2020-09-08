import React from "react";
import './catalog-list.scss';
import ColCategoryItem from "../col-category-item";

const CatalogList = ({catalogList}) => {
    function renderCategory() {
        return catalogList.map( (categoryItem) => {
            return(
                <ColCategoryItem key={categoryItem.id}
                    categoryItem={categoryItem}/>
            )
        })
    }

    const category = renderCategory()

    return (
        <nav className='catalog-list'>
            <ul className='catalog-col-category _col-catalog'>
                {category}
            </ul>
        </nav>
    )
};



export default CatalogList;
