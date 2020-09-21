import React, {Component} from "react";
import './footer-contact-item.scss'

export default class FooterContactItem extends Component{
    render() {
        const {title} = this.props;

        return (
            <div className="footer-contact-item">
                <h4 className='f-contact-item__title'>
                    {title}
                </h4>
                {this.props.children}
            </div>
        )
    }
};

