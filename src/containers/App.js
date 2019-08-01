import {PureComponent} from 'react'
import React from 'react';
import ProductList from './../components/productList'
import MyCart from './myCart'
import Products from './products'
class App extends PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>购物车</h3>
                <hr/>
                <h4>商品列表</h4>
                <Products></Products>
                <hr/>
                <h4>我的购物车</h4>
                <MyCart></MyCart>
            </div>
        )
    }

}
export default App;