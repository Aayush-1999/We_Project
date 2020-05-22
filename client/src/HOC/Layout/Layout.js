import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

class Layout extends Component{
    render(){
        return (
            <Aux className = {classes.body}>
                <Toolbar isAuth={this.props.auth} />
                <main >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout