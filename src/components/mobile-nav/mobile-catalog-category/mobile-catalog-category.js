import React from "react";
import './mobile-catalog-category.scss'
import MobileNavLi from "../mobile-nav-li";

const MobileCatalogCategory = ({categoryList, subcategoryOpen}) => {


    function renderList() {
        return categoryList.map( ( item ) => {
            const {category, categoryItem, id} = item;
            return <MobileNavLi
                key={id}
                label={category}
                item={item}
                submenu={categoryItem}
                submenuOpen={subcategoryOpen}/>
        })
    }

    const li = renderList();
    return (
        <ul className='mobile-catalog-category'>
            {li}
        </ul>
    )
};

export default MobileCatalogCategory;
