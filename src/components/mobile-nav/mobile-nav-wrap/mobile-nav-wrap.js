import React, {Component} from "react";
import './mobile-nav-wrap.scss';
import MainMenuMobile from "../main-menu-mobile";
import ServerPlug from "../../../server-plug";
import MobileSubmenu from "../mobile-submenu";
import MobileCatalog from "../mobile-catalog";

export default class MobileNavWrap extends Component{
    serverPlug = new ServerPlug();
    state = {
        isSubmenuOpen: null,
        IsCatalogOpen: null
    };

    submenuList = this.serverPlug.mobileMenuList;
    categoryList = this.serverPlug.catalogList;


    componentDidUpdate(prevProps) {
        if(this.props.isMobileNavOpen !== prevProps.isMobileNavOpen){
            this.submenuClose();
            this.categoryClose();
        }
    }

    submenuOpen = (id) => {
        this.setState({
            isSubmenuOpen: id
        })
    };


    submenuClose = () => {
        this.setState({
            isSubmenuOpen: null
        })
    };

    categoryOpen = (id) => {
        this.setState({
            IsCatalogOpen: id
        })
    };

    categoryClose = () => {
        this.setState({
            IsCatalogOpen: null
        })
    };


    renderSubmenu = () => {
        const {isSubmenuOpen} = this.state;
        const {mobileNavOpen} = this.props;
        return this.submenuList.map( (item) => {
            const {label, submenu, id} = item;
            if(!submenu){
                return null
            }
            return (
                <MobileSubmenu
                    key={id}
                    isOpen={isSubmenuOpen}
                    title={label}
                    submenu={submenu}
                    id={id}
                    back={this.submenuClose}
                    mobileNavOpen={mobileNavOpen}/>
            )
        })
    };

    renderSubcategory = () => {
        const {IsCatalogOpen} = this.state;
        const {mobileNavOpen} = this.props;
        return this.categoryList.map( (item) => {
            const {category, categoryItem, id} = item;
            if(!categoryItem){
                return null
            }
            return (
                <MobileSubmenu
                    key={id}
                    isOpen={IsCatalogOpen}
                    title={category}
                    submenu={categoryItem}
                    id={id}
                    back={this.categoryClose}
                    mobileNavOpen={mobileNavOpen}/>
            )
        })
    };

    render() {
        const {isMobileNavOpen, mobileNavOpen} = this.props;
        const {isSubmenuOpen} = this.state;
        const submenu = this.renderSubmenu();
        const subcategory = this.renderSubcategory();

        return (

            <nav className="mobile-nav-wrap">
                <MainMenuMobile
                    submenuOpen={this.submenuOpen}
                    listItem={this.submenuList}
                    isMobileNavOpen={isMobileNavOpen}
                    mobileNavOpen={mobileNavOpen}
                />

                <MobileCatalog
                    isSubmenuOpen={isSubmenuOpen}
                    submenuClose={this.submenuClose}
                    isMobileNavOpen={isMobileNavOpen}
                    mobileNavOpen={mobileNavOpen}
                    categoryList={this.categoryList}
                    categoryOpen={this.categoryOpen}
                />

                {submenu}
                {subcategory}
            </nav>
        )
    }

};

