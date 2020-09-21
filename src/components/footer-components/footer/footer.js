import React, {Component}  from 'react';
import './footer.scss'
import FooterSubscription from "../footer-subscription";
import FooterContent from "../footer-content";
import FooterContact from "../footer-contact";

export default class Footer extends Component{
    render() {
        return (
            <footer className='footer'>
                <FooterSubscription/>
                <FooterContent
                    left={'test'}
                    right={<FooterContact/>}/>
            </footer>
        )
    }
}
