import React from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <Aux className = {classes.body}>
            <div>
                <Toolbar />
            </div>
            <main >
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout