import React from "react";
import './search-mobile-icon.scss'

const SearchMobileIcon = ({isOpenSearch}) => {
    return (
        <i
            onClick={isOpenSearch}
            className='search-mobile-icon '/>
    )
};

export default SearchMobileIcon;
