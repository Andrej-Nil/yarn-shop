import React, {Component} from "react";
import './mobile-nav-wrap.scss';
import MainMenuMobile from "../main-menu-mobile";
import ServerPlug from "../../../server-plug";
import MobileSubmenu from "../mobile-submenu";
import MobileCatalog from "../mobile-catalog";
import Service from "../../../server";

export default class MobileNavWrap extends Component{
    serverPlug = new ServerPlug();
    service = new Service();
    state = {
        isSubmenuOpen: null,
        IsCatalogOpen: null,
        catalog: [],
        catalogLoading: true,
        catalogError: false,
        mobileNav: [],
        mobileNavLoading: true,
        mobileNavError: false,
    };

     getCatalog() {
        this.service.getCatalog()
            .then(this.onCatalog)
            .catch(this.catalogError)
    }

    onCatalog = (catalog) => {

        this.setState({
            catalog,
            catalogLoading: false
        })
    };

    catalogError = (err) => {
        console.log(err);
        this.setState({
            catalogError: true,
            catalogLoading: false
        })
    };

    getMobileNav() {
        this.service.getMobileNav()
            .then(this.onMobileNav)
            .catch(this.mobileNavError)
    }



    onMobileNav = (mobileNav) => {
        this.setState({
            mobileNav,
            mobileNavLoading: false
        })
    };

    mobileNavError = (err) => {
        console.log(err);
        this.setState({
            mobileNavError: true,
            mobileNavLoading: false
        })
    };

    componentDidMount() {
        this.getCatalog();
        this.getMobileNav();
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


    componentDidUpdate(prevProps) {
        if(this.props.isMobileNavOpen !== prevProps.isMobileNavOpen){
            this.submenuClose();
            this.categoryClose();
        }
    }

    renderSubmenu = () => {
        const {isSubmenuOpen, mobileNav} = this.state;
        const {mobileNavOpen} = this.props;
        return mobileNav.map( (item) => {
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
        const {IsCatalogOpen, catalog} = this.state;
        const {mobileNavOpen} = this.props;
        return catalog.map( (item) => {
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
        const {isSubmenuOpen, catalog, mobileNav} = this.state;
        const submenu = this.renderSubmenu();
        const subcategory = this.renderSubcategory();

        return (

            <nav className="mobile-nav-wrap">
                <MainMenuMobile
                    submenuOpen={this.submenuOpen}
                    listItem={mobileNav}
                    isMobileNavOpen={isMobileNavOpen}
                    mobileNavOpen={mobileNavOpen}
                />

                <MobileCatalog
                    isSubmenuOpen={isSubmenuOpen}
                    submenuClose={this.submenuClose}
                    isMobileNavOpen={isMobileNavOpen}
                    mobileNavOpen={mobileNavOpen}
                    catalog={catalog}
                    categoryOpen={this.categoryOpen}
                />

                {submenu}
                {subcategory}
            </nav>
        )
    }

};

