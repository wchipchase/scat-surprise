import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import connection from '../helpers/data/connection';
import './App.scss';


connection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to = {{ pathname: '/home', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={ props => routeChecker(props) } />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to = {{ pathname: '/auth', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={ props => routeChecker(props) } />;
};

class App extends React.Component {
state ={
  authed: false,
}

componentDidMount() {
  this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ authed: true });
    } else {
      this.setState({ authed: false });
    }
  });
}

componentWillUnmount() {
  this.removeListener();
}

render() {
  const { authed } = this.state;
  const loadComponent = () => {
    if (authed) {
      return <Home />;
    }
    return <Auth />;
  };
  return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Navbar authed={authed} />
            <div className='containser'>
              <div className = "row">
                <Switch>
                  <PublicRoute path='/auth' component={Auth} authed={authed} />
                  <PrivateRoute path='/home' component={Home} authed={authed} />
                  <Redirect from="*" to="/auth" />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
  );
}
}
export default App;
