import React, { Component } from 'react'


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
                <img src={image} alt='Movie Poster'/>
                <button className='card' onClick={this.handleOnClick}>Add Flick for review</button>
            </div>
        )
    }
}

export default SearchResult