import React, { Component } from 'react';
import { Route , Redirect,Switch } from 'react-router-dom'
import Home from './Containers/Home/Home'
import Login from "./Containers/Login/Login";
import Register from './Containers/Register/Register'
import Books from './Containers/Books/Book'
import Orders from './Containers/Orders/Orders'
import Layout from './HOC/Layout/Layout'
import {connect} from 'react-redux'
import * as actions from './Store/Actions/Index'

class App extends Component {

  componentDidMount(){
    this.props.onAuthCheck()
  }

  render() {
    let routes=(
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuth){
      routes=(
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/books' exact component={Books} />
          <Route path='/orders' exact component={Orders} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <Layout auth={this.props.isAuth}>
        {routes}
      </Layout>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onAuthCheck:()=>dispatch(actions.checkAuth())
  }
}

const mapStateToProps=(state)=>{
  return{
    isAuth: state.auth.token!=null
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
