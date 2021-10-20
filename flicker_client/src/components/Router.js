import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import FlicksContainer from './FlicksContainer'
import Flick from './Flick'
const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/flicks' render={(routerProps) => <FlicksContainer {...routerProps}/>} />
            <Route path='/flicks/:id' render={(routerProps) => <Flick {...routerProps} /> } />
        </Switch>
    )
}

export default Router