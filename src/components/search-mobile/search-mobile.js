import React, {Component}  from 'react';
import './search-mobile.scss'
import CloseBtn from "../close-btn";
import FormInputBtn from "../form-input-btn";
import Service from "../../server";

export default class SearchMobile extends Component{
    service = new Service();
    state = {
        placeholder: null,
        loading: true,
        error: false,
    };

    onPlaceholderLoaded = (placeholder) => {
        this.setState({
            placeholder,
            loading: false
        })
    };

    onError = (err) => {
        console.log(err);
        this.setState({
            error: true,
            loading: false
        })
    };

    getPlaceholder(){
        this.service
            .getSearchPlaceholder()
            .then( this.onPlaceholderLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        this.getPlaceholder()
    }
    render() {
        const {placeholder, error} = this.state;
        const {isOpen, isOpenSearch} = this.props;
        const cls = isOpen ? '_open' : '_close';
        const holder = !error ? placeholder : "nako";
        return (
            <div className={`search-mobile ${cls} container`}>
                <FormInputBtn label={'Найти'} placeholder={holder}/>
                <CloseBtn
                    close={isOpenSearch}/>
            </div>
        )
    }
}
