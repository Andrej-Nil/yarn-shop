import React, {Component}  from 'react';
import './footer.scss'
import FooterSubscription from "../footer-subscription";

export default class Footer extends Component{
    render() {
        return (
            <footer className='footer'>
                <FooterSubscription/>
            </footer>
        )
    }
}
