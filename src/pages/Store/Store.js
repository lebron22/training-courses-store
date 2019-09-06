import React, { Component } from "react";
import { connect } from "react-redux";
import Heading from "../../components/shared/Heading/Heading";
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
    const { searchedProducts } = this.state;
    const renderProducts = searchedProducts.length ? (
      <ProductList matches={searchedProducts} />
    ) : (
      <Heading title="0 products found" />
    );
    return (
      <div className="store">
        <SearchBar
          products={this.props.storeProducts}
          handleMatches={this.handleSearchedProducts}
        />
        {renderProducts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { storeProducts: state.storeProducts };
};

export default connect(mapStateToProps)(Store);
