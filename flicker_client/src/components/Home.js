import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchContainer from './SearchContainer'
import { loadSearch } from '../actions/searchActions'

class Home extends Component {
    render(){
        return (
            <div>
            <h1>Welcome to Flicker - Movie and TV Reviews</h1>
                <div>
                <SearchContainer 
                search={this.props.search}
                searchResults={this.props.searchResults}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({searchResults: state.searchResults})

const mapDispatchToProps = dispatch => ({
    search: payload => dispatch(loadSearch(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home) 