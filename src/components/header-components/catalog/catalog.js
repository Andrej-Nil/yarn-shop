import React, {Component} from "react";
import './catalog.scss';
import CatalogList from "../catalog-list";
import Link from "../../link";
import Service from "../../../server";

export default  class Catalog extends Component{
    service = new Service();
    state = {
        catalog: [],
        loading: true,
        error: false,
    };

    getCatalog() {
        this.service.getCatalog()
            .then(this.onCatalog)
            .catch(this.onError)
    }

    onCatalog = (catalog) => {
        this.setState({
            catalog,
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
        this.getCatalog()
    }

    render() {
        const { catalog } = this.state;
        const catalogBtn = (
            <div className='catalog-btn'>
                <span>
                    Каталог товаров
                </span>
                <i className='catalog__icon'/>
            </div>
        );
            return (
            <div className='catalog'>
                <Link href={'#!'}
                      cls={"catalog__link"}
                      content={catalogBtn}/>
                <CatalogList catalog={catalog}/>
            </div>
        )
    }

};
