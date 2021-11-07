import React, { Component } from 'react'

class Likes extends Component {

    constructor() {
        super()
        this.state = {
            likes: 0
        }
    }

    handleClick = () => {
        this.setState((previousState) => {
            return {
            likes: previousState.likes + 1
            }
        })
    }

    render(){
        return(
            <div>
                <br/>
                <b>{this.state.likes}<span>{" "}</span></b>    
                <button className="like_button" onClick={this.handleClick}>Likes</button>
            </div>
        )
    }
}

export default Likes 