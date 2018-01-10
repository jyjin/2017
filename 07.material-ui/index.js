import 'babel-polyfill'
require('es6-promise').polyfill()
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Redirect,IndexRoute, Route, Link, IndexRedirect } from 'react-router'
import routes from './routes'

render(
    <Provider>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('root')
)
