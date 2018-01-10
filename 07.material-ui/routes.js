import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import AppContainer from './view/AppContainer'

const routes = (
    <Route path={`/`}>
        <IndexRedirect to={`/`} />
        <Route path={`/:model`} component={AppContainer} />
    </Route>
)

export default routes
