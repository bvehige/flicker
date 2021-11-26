import React, { Component } from 'react'
import FlicksForm from '../FlicksForm'
import SearchResult from './SearchResult'

class SearchResults extends Component {

    render(){
        if(this.props.searchResults !== null){
        const results = this.props.searchResults.map(result => 
            <SearchResult key={result.Id}
            id={result.Id}
            title={result.title}
            year={result.year}
            category={result.category}
            image={result.image}
            addFlick={this.props.addFlick}
            />)

            return (
                <div>
                    <div className="search">     
                    {results}
                    </div>
                    <br/>
                </div>
            )
    }
}      
}

export default SearchResults
