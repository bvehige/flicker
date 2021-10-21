import React, { Component } from 'react'
import { flicksReducer } from '../../reducers/flicksReducer'


class SearchResult extends Component {

    handleOnClick = e => {
        this.props.addFlick(this.props)
        this.setState({
            searchResults: ''
        })
        window.location ='/flicks'
    }

    render() {
        const { title, year, category, image } = this.props
    
        return (
            
            <div className='search_card'>
                {title} | {year} | {category} 
                <br/>
                <button className='card' onClick={this.handleOnClick}>Add {title} for review</button>
                <br/>
                <img src={image} alt='Movie Poster'/>
            </div>
        )
    }
}

export default SearchResult