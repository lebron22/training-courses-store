import React, { Component } from "react";
import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductList from "../../components/ProductList/ProductList";
import "./Store.sass";

class Store extends Component {
  state = {
    searchedProducts: []
  };

  handleSearchedProducts = searchedProducts => {
    this.setState({ searchedProducts });
  };

  render() {
    const renderProducts = this.state.searchedProducts.length ? (
      <ProductList matches={this.state.searchedProducts} />
    ) : (
      <Heading title="0 products found" />
    );
    return (
      <div className="store">
        <SearchBar
          products={this.props.products}
          handleMatches={this.handleSearchedProducts}
        />
        {renderProducts}
      </div>
    );
  }
}

export default Store;
