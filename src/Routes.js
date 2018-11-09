import React from 'react';
import Layout from './Components/Hoc/Layout';
import { Switch} from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PublicRoutes';

import Home from './Components/Home';
import SignIn from './Components/SignIn';
import TheTeam from './Components/TheTeam';
import TheMatches from './Components/TheMatches';
import NotFound from './Components/UI/NotFound';

import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/Matches';
import AddEditMatch from './Components/Admin/Matches/AddEditMatch';
import AdminPlayers from './Components/Admin/Players';
import AddEditPlayers from './Components/Admin/Players/AddEditPlayers';


const Routes = props => {
  return (
    <Layout>
      <Switch>
      <PrivateRoute {...props} path="/admin-players/add-players" exact component={AddEditPlayers}/>
      <PrivateRoute {...props} path="/admin-players/add-players/:id" exact component={AddEditPlayers}/>
      <PrivateRoute {...props} path="/admin-players" exact component={AdminPlayers}/>
      <PrivateRoute {...props} path="/admin-matches/edit-match" exact component={AddEditMatch}/>
      <PrivateRoute {...props} path="/admin-matches/edit-match/:id" exact component={AddEditMatch}/>
      <PrivateRoute {...props} path="/admin-matches" exact component={AdminMatches}/>
      <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
      <PublicRoute {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
      <PublicRoute {...props} restricted={false} path="/the-team" exact component={TheTeam}/>
      <PublicRoute {...props} restricted={false} path="/the-matches" exact component={TheMatches}/>
      <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
      <PublicRoute {...props} restricted={false}  exact component={NotFound}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
