import React from "react";
import { withRouter, Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "", showResults: false, searchSelected: false };

    // alternative 1: reference works, but search does not disappear
    this.prevRef = null
    this.searchInputRef = React.createRef();
    // this.focusInput = this.focusInput.bind(this);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateShowResults = this.updateShowResults.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, () => {
        if (this.state.searchTerm !== "")
          this.props.fetchSearch(this.state.searchTerm.toUpperCase(), window.iexcloudAPIKey);
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const searchTerm = this.state.searchTerm.toUpperCase()
    const searchTermExists = Object.values(this.props.searchResults).filter(search => {return search.symbol === searchTerm})

    if (searchTerm !== "" && searchTermExists.length > 0) this.props.history.push({ pathname: `/stocks/${searchTerm}` });
  }

  updateShowResults(toggle) {
    debugger

    if (toggle === "show") {
      this.setState({ showResults: true, searchSelected: true })
    } else {
      this.setState({ showResults: false, searchSelected: false })
    }
  }

  renderSearchResults() {
    if (document.activeElement === this.searchInputRef.current) {}

    debugger
    if (this.state.showResults === true ) {
      // if searched stock does not appear in search list
      if ( this.props.searchResults === undefined || this.props.searchResults.length === 0 ) {
        return (
          <div className="no-stock-result-message">We were unable to find any results for your search.</div>
        );
      }
  
      // if searched stock appears in search list
      return (
        <div className="search-results">
          <h1 className="search-title">Stocks</h1>
          <div className="search-results-list">
            {this.props.searchResults.map((stock, i) => (
              <Link
                  className="search-results-item"
                  key={i}
                  to={{
                    pathname: `/stocks/${stock.symbol}`,
                    state: { ticker: stock.symbol, name: stock.securityName },
                  }}
                >
                  <div className="search-stock-symbol">{stock.symbol}</div>
                  <div className="search-stock-name">{stock.securityName}</div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={this.state.searchTerm === '' ? "search-form-container" : "search-form-container-with-text"}>
        <div className="search-icon-container">
          <img className="search-icon" src={window.searchIcon} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            ref={this.searchInputRef}
            onChange={this.update("searchTerm")}
            onClick={() => this.updateShowResults("show")}
          />
        </form>
        <div id="search-results" className={this.state.searchTerm !== '' ? 'search-results-container' : 'hide'}>
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default withRouter(Search);