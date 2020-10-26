import React, {Component} from "react";
import './catalog.scss';
import CatalogList from "../catalog-list";
import Link from "../../link";
import ServerPlug from "../../../server-plug";

export default  class Catalog extends Component{
    serverPlug = new ServerPlug();
    state = {
        catalogList: this.serverPlug.catalogList
    };

    render() {

        const { catalogList } = this.state;
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
                <CatalogList catalogList={catalogList}/>
            </div>
        )
    }

};
