import React, {Component}  from 'react';
import './footer.scss'
import FooterSubscription from "../footer-subscription";
import FooterContent from "../footer-content";
import FooterCopyright from "../footer-copyright";

export default class Footer extends Component{
    render() {
        return (
            <footer className='footer'>
                <FooterSubscription/>
                <FooterContent/>
                <FooterCopyright/>
            </footer>
        )
    }
}
