import React, {Component}  from 'react';
import './brands.scss'
import Link from "../link";
import Service from "../../server";


export default class Brands extends Component{
    service = new Service();
    state= {
        brands: [],
        loading: true,
        error: false,
    };

    onBrands = (brands) => {
        this.setState({
            brands,
            loading: false
        })
    };

    onError = (err) => {
        console.log(err);
        this.setState({
            loading: false,
            error: true,
        })
    };

    getBrands(){
        this.service.getBrands()
            .then(this.onBrands)
            .catch(this.onError)
    };

    componentDidMount() {
        this.getBrands()
    }

    renderBrands() {
        const { brands } = this.state;
        return brands.map( (brand) => {
            const {image, url, id} = brand;
            const brandIcon = <img className='brands__item' src={image} alt={id}/>;
            return (
                <Link key={id} href={url} cls={'brands-link'} content={brandIcon}/>
            )
        })
    }
    render() {

        const brands = this.renderBrands();
        return (
            <div className='brands container'>
                {brands}
            </div>
        )
    }
}
