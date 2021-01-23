import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          render = {props =>(
            <App {...props}/>
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(<Root />, document.getElementById('root'));
