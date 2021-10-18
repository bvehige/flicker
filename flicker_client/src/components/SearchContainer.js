import React, { Component } from 'react'
import SearchForm from './SearchForm'

class SearchContainer extends Component {

    render() {
        return (
            <div>
                <h2>Search for a Flick to review</h2>
                <SearchForm />
            </div>
        )
    }

}

export default SearchContainer