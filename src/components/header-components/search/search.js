import React, {Component}  from 'react';
import './search.scss'

export default class Search extends Component{
    render() {
        return (
            <form className='search'>
                <input className='search__input input' type="text" placeholder='alize'/>
                <button
                    className='search__submit btn _blueBtn'>
                    Найти
                </button>
            </form>
        )
    }
}
