import React, {Component} from "react";
import './footer-nav.scss'
import FooterNavCol from "../footer-nav-col";
import Service from "../../../server";


export default class FooterNav extends Component{

    service = new Service();

    state = {
        footerNav: [],
        loading: false
    };

    getFooterNav() {
        this.service.getFooterNav()
            .then(this.onFooterNav)
            .catch()
    }

    onFooterNav = (footerNav) => {
        this.setState({
            footerNav,
            loading: false
        })
    };

    componentDidMount() {
        this.getFooterNav()
    }

    renderUl() {
        const {footerNav} = this.state;
        return footerNav.map( (item) => {
            return <FooterNavCol key={item.id} item={item} />
        })
    }

    render() {
        const ul = this.renderUl();
        return (
            <nav className='footer-nav'>
                {ul}
            </nav>
        )
    }

};


