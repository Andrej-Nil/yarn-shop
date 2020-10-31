import React, {Component}  from 'react';
import './header-search.scss'
import FormInputBtn from "../../form-input-btn";
import Service from "../../../server";

export default class HeaderSearch extends Component{
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

    componentDidMount() {
        this.getPlaceholder()
    }

    getPlaceholder(){
        const id = Math.floor(Math.random() * 10);
        this.service
            .getSearchPlaceholder(id)
            .then( this.onPlaceholderLoaded)
            .catch(this.onError)
    }
    render() {
        const {placeholder, loading, error} = this.state;
        const pholder = !error ? placeholder : "alize";
        return (
            <div className='header-search'>
                <FormInputBtn label={'Найти'}
                    placeholder={pholder}
                    loading={loading}/>

            </div>
        )
    }
}
