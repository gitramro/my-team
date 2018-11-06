import React from 'react';
import Layout from './Components/Hoc/Layout';
import { Switch} from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PublicRoutes';

import Home from './Components/Home';
import SignIn from './Components/SignIn';

import Dashboard from './Components/Admin/Dashboard';


const Routes = props => {
  return (
    <Layout>
      <Switch>
      <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
      <PublicRoute {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
      <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
