import React, { Component } from "react";
import "./SearchBar.sass";

class SearchBar extends Component {
  state = {
    inputText: ""
  };

  componentDidMount() {
    this.filterMatches();
  }

  handleInputChange = async e => {
    await this.setState({ inputText: e.target.value });
    await this.filterMatches();
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.filterMatches();
  };

  filterMatches = () => {
    // destucturing jak duzo masz this.props -> const {products, handleMatches } = this.props
    const filteredProducts = this.props.products.filter(product => {
      const title = product.title.toUpperCase();
      const text = this.state.inputText.toUpperCase();
      return title.includes(text);
    });
    this.state.inputText.length
      ? this.props.handleMatches(filteredProducts)
      : this.props.handleMatches(this.props.products);
  };

  render() {
    return (
      <div className="searchbar">
        <form className="searchbar__form" onSubmit={this.handleFormSubmit}>
          <input
            className="searchbar__input"
            placeholder="Search for products..."
            type="text"
            onChange={this.handleInputChange}
            value={this.state.inputText}
          />
          <button className="searchbar__button" onClick={this.handleFormSubmit}>
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
