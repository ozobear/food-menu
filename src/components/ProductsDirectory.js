import React, { Component } from 'react';
import productsData from './productsData';
import Product from './Product';

class ProductsDirectory extends Component {
    constructor() {
        super();
        this.state = {
            products: productsData
        }
    }

    render() {
        const products = this.state.products.map((product, idx) => <Product info={product} key={idx} /> );

        return (
            <>
                {products}
            </>
        )
    }

}

export default ProductsDirectory;
