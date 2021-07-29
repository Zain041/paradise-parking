
import React, { useContext, Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { contextData } from '../../context/Provider'



const AdminRoute = ({ component: Component, ...rest }) => {
    const context = useContext(contextData)
    return (
        <Fragment>
            <Route
                {...rest}
                render={props => (
                    context.isAuthenticated && context.isAdmin ?
                        <Component {...props} />
                        : <Redirect to="/login" />
                )
                }
            />
        </Fragment>
    )
}



export default AdminRoute