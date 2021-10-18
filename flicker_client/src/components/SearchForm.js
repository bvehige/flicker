import React, { Component } from 'react'

class SearchForm extends Component {

    state = {
        search: ''
    }


    render() {
        return (
            <div>
                <form>
                    <input type='text' 
                    size='55'
                    value={this.state.search}
                    placeholder='Search for a flick to review'
                    name='search'></input><br/><br/>
                    <input type='submit' value='Submit'></input>

                </form>
            </div>
        )
    }

}

export default SearchForm

