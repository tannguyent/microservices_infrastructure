import * as React from 'react';

import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import("../pages/home"));

const AboutPage = React.lazy(() => import("../pages/about"));

const NotFoundPage = React.lazy(() => import("../pages/notfound"));

import {WaitingComponent} from '../common/waiting-component'

const Routes = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={WaitingComponent(HomePage)} />
                <Route path="/about" component={WaitingComponent(AboutPage)} />
                <Route component={NotFoundPage} />
            </Switch>
        </main>
    )
}

export default Routes