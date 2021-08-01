import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './user/Home'
import Signup from './auth/Signup'
const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup}/>

                </Switch>
            </Router>
        </div>
    )
}

export default Routes
