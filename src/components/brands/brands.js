import React, {Component}  from 'react';
import './brands.scss'
import Link from "../link";

export default class Brands extends Component{
    state= {
        brands: [
            {
                src: '/image/brands/alize-logo.png',
                href: '#!', id: 'alize'
            },
            {
                src: '/image/brands/clover-logo.png',
                href: '#!', id: 'clover'
            },
            {
                src: '/image/brands/etrofil-logo.png',
                href: '#!', id: 'etrofil'
            },
            {
                src: '/image/brands/gazzal-logo.png',
                href: '#!', id: 'gazzal'
            },
            {
                src: '/image/brands/knitpro-logo.png',
                href: '#!', id: 'knitpro'
            },
            {
                src: '/image/brands/pehorka-logo.png',
                href: '#!', id: 'pehorka'
            },
            {
                src: '/image/brands/seam-logo.png',
                href: '#!', id: 'seam'
            },
            {
                src: '/image/brands/yarnart-logo.png',
                href: '#!', id: 'yarnart'
            },
        ]
    };

    renderBrands() {
        const { brands } = this.state;
        return brands.map( (brand) => {
            const {src, href, id} = brand;
            const brandIcon = <img className='brands__item' src={src} alt={id}/>;
            return (
                <Link key={id} href={href} cls={'brands-link'} content={brandIcon}/>
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
