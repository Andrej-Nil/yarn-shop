import React from "react";
import './search-mobile-icon.scss'

const SearchMobileIcon = ({searchChange}) => {
    return (
        <i
            onClick={searchChange}
            className='search-mobile-icon '/>
    )
};

export default SearchMobileIcon;
