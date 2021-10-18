import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchContainer from '../components/Search/SearchContainer'
import { loadSearch } from '../actions/searchActions'
import { addFlick } from '../actions/flicksActions'

class Home extends Component {
    render(){
        return (
            <div>
            <h1>Welcome to Flicker - Movie and TV Reviews</h1>
                <div>
                <SearchContainer 
                search={this.props.search}
                searchResults={this.props.searchResults}
                addFlick={this.props.addFlick}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({searchResults: state.searchResults})

const mapDispatchToProps = dispatch => ({
    search: payload => dispatch(loadSearch(payload)),
    addFlick: flick => dispatch(addFlick(flick))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home) 