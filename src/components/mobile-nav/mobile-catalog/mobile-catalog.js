import React, {Component} from "react";
import './mobile-catalog.scss'
import BackBtn from "../../back-btn";
import CloseBtn from "../../close-btn";
import MobileNavLi from "../mobile-nav-li";


export default class MobileCatalog extends Component{

    render() {
        const {mobileNavOpen} = this.props;
        const {isSubmenuOpen, submenuClose, categoryList, categoryOpen} = this.props;
        const cls = isSubmenuOpen === 'catalog'
            ? '_open' : '_close';

        function categoryItem() {
            return categoryList.map( ( item ) => {
                const {category, categoryItem, id} = item;
                return <MobileNavLi
                    key={id}
                    label={category}
                    item={item}
                    submenu={categoryItem}
                    submenuOpen={categoryOpen}/>
            })
        }

        const li = categoryItem();
        return (
            <div className={`mobile-catalog ${cls}`}>
                <BackBtn back={submenuClose}/>
                <CloseBtn close={mobileNavOpen}/>
                <h6 className='mobile-submenu__title'>
                    Каталог
                </h6>
                <ul>
                    {li}
                </ul>
            </div>
        )
    }

};
