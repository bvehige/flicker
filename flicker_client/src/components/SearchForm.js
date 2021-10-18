import React, { Component } from 'react'

class SearchForm extends Component {

    state = {
        search: ''
    }

    handleOnChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        if(this.state.search !== ''){
            this.searchFlick(this.state.search)
            this.setState({
                search: ''
            })
        } else
            alert("Search field cannot be empty")
    }

    searchFlick = (search) => {
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=1cd6c92b`)
        .then(resp => resp.json())
        .then(results => this.mapResults(results))
    }    

    mapResults = (results) => {
        let flickresults = results.Search
        console.log(flickresults[0])
        let SearchResults = []
            for (let i = 0; i < flickresults.length; i++){
                let details = flickresults[i]
                SearchResults.push({
                    Id: i,
                    title: details.Title,
                    year: details.Year,
                    category: details.Type,
                    image: details.Poster
                })
            }
            this.props.search(SearchResults)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' 
                    size='55'
                    value={this.state.search}
                    placeholder='Search for a flick to review'
                    name='search'
                    onChange={this.handleOnChange}></input><br/><br/>
                    <input type='submit' value='Submit'></input>

                </form>
            </div>
        )
    }

}

export default SearchForm

