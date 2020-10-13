import React, {Component}  from 'react';
import './search-mobile.scss'
import CloseBtn from "../close-btn";
import FormInputBtn from "../form-input-btn";

export default class SearchMobile extends Component{

    render() {
        const {isOpen, isOpenSearch} = this.props;
        const cls = isOpen ? '_open' : '_close';
        return (
            <div className={`search-mobile ${cls} container`}>
                <FormInputBtn label={'Найти'} placeholder={'Nako'}/>
                <CloseBtn
                    close={isOpenSearch}/>
            </div>
        )
    }
}
