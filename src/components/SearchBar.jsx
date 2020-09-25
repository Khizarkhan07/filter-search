import React, {Component} from 'react';

class SearchBar extends Component {

    handleFilterChange = (e) => {
        this.props.onFilterTextChange(e.target.value)

    }
    handleStockChange = (e) => {
        this.props.onStockChange(e.target.checked);
    }
    render() {
        return (
            <div>
                <input value={this.props.filterText} type="text" placeholder={"search..."}
                       onChange={this.handleFilterChange}/>
                <p>
                    <input checked={this.props.inStockOnly} type="checkbox"
                        onChange={this.handleStockChange}
                    />
                    {' '}
                    Only show products in stock!
                </p>
            </div>
        );
    }
}

export default SearchBar;