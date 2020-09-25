import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText : '',
            inStockOnly: false,
        }
    }

    handleFilterChange = (filterText) => {
        this.setState({filterText:filterText})
    }
    handleStockChange = (stockValue) => {
        this.setState({inStockOnly:stockValue})
    }

    render() {
        const PRODUCTS = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ];
        return (
            <div>
                <SearchBar
                    onFilterTextChange={this.handleFilterChange}
                    onStockChange={this.handleStockChange}
                />
                <ProductTable
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    products={PRODUCTS}/>
            </div>
        );
    }
}

export default FilterableProductTable;