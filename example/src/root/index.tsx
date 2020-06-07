import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Route, Switch, Redirect, withRouter, NavLink } from 'react-router-dom'

import Master from '../master'
import HResizeBox from '../hresize'

import './index.scss'

const Root = (props): React.ReactElement => {
    const { match: { url } } = props

    return (
        <div className="root-container">
            <ul className="nav-box">
                <li>
                    <NavLink to="/home" activeClassName="active">首页</NavLink>
                </li>
                <li>
                    <NavLink to="/hresize" activeClassName="active">resize-box</NavLink>
                </li>
            </ul>
            <div className="main-content">
                <Switch>
                    <Route path="/home" component={Master} />
                    <Route path="/hresize" component={HResizeBox} />
                    <Route path={url} exact render={(): React.ReactNode => <Redirect to="/hresize" />} />
                </Switch>
            </div>
        </div>
    )
}

Root.propTypes = {
    match: PropTypes.object.isRequired
}

export default withRouter(Root)
