import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <p>Logo</p>
            <nav>
                <NavigationItems isAuth={props.isAuth} />
            </nav>
        </header>
    )

}

export default Toolbar;