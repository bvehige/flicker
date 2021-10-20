import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import FlicksContainer from './FlicksContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/flicks' component={FlicksContainer} />

        </Switch>
    )
}

export default Router