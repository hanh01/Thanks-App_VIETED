import React from 'react';

import  {Switch, BrowserRouter as Router, Route,Redirect,} from "react-router-dom";
import {connect} from "react-redux";

import {userRoutes, authRoutes} from "./routes/allRoutes";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import ThanksLayout from "./components/ThanksLayout/"
import NonAuthLayout from "./components/NonAuthLayout";
import "./assets/scss/theme.scss";

const App = (props) => {

    function getLayout() {
        let layoutCls = ThanksLayout;
        switch (props.layout.layoutType) {
            default:
                layoutCls = ThanksLayout;
                break;
        }
        return layoutCls;
    };

    const Layout = getLayout();




    const NonAuthmiddleware = ({component: Component, layout: Layout,login}) => {
        if(login.isLoginRedirect === true){
            return <Redirect to={ { pathname: '/loading' } }/>
        }
        return (
            <Route
                render={props => {
                    if (login.isLoginRedirect === false && login.loginSuccess === true && login.isLogout === false) {
                        setTimeout(() => {
                            props.history.push('/home')
                        }, 3000)
                    }
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    );
                }}
            />
            )
    };

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {authRoutes.map((route, idx) => (
                        <NonAuthmiddleware
                            path={route.path}
                            layout={NonAuthLayout}
                            component={route.component}
                            key={idx}
                            login={props.login}
                        />
                    ))}

                    {userRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            layout={Layout}
                            component={route.component}
                            key={idx}
                            login={props.login}
                        />
                    ))}
                </Switch>
            </Router>
        </React.Fragment>

    );
}


const mapStateToProps = state => {
    return {
        layout: state.Layout,
        login: state.Login || {}
    };
};

export default connect(mapStateToProps, null)(App);
