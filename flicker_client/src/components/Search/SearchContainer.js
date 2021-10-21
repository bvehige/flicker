import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'


class SearchContainer extends Component {

    render() {
        return (
            <div>
                <h2>Search for a Flick to review</h2>
                <SearchForm search={this.props.search} />
                <SearchResults
                searchResults={this.props.searchResults}
                addFlick={this.props.addFlick}
                />
            </div>
        )
    }

}

export default SearchContainer