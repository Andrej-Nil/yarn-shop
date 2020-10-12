import React, {Component}  from 'react';
import './search-mobile.scss'
import CloseBtn from "../closeBtn";
import FormInputBtn from "../form-input-btn";

export default class SearchMobile extends Component{

    render() {
        const {isOpen, searchChange} = this.props;
        const cls = isOpen ? '_open' : '_close';
        return (
            <div className={`search-mobile ${cls} container`}>
                <FormInputBtn label={'Найти'} placeholder={'Nako'}/>
                <CloseBtn
                    searchChange={searchChange}
                    close={this.close}/>
            </div>
        )
    }
}
