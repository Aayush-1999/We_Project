import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Containers/Home/Home'
import Login from "./Containers/Login/Login";
import Register from './Containers/Register/Register'
import Layout from './HOC/Layout/Layout'



class App extends Component {
  render() {
    return (
      // <div>
        <Layout>        
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Layout>
        // </div>
    );
  }
}

export default App;
