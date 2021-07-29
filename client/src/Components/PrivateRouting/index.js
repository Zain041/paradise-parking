
import React, { useContext, Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { contextData } from '../../context/Provider'



const PrivateRoute = ({ component: Component, ...rest }) => {
    const context = useContext(contextData)
    return (
        <Fragment>
            <Route
                {...rest}
                render={props => (
                    context.isAuthenticated ?
                        <Component {...props} />
                        : <Redirect to="/login" />
                )
                }
            />
        </Fragment>
    )
}



export default PrivateRoute