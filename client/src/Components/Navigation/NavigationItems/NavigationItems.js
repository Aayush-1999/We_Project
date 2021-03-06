import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import * as actions from '../../../Store/Actions/Index'
import Auxiliary from '../../../HOC/Auxiliary/Auxiliary'

const NavigationItems = (props) => {
    const dispatch=useDispatch()

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem to={"/"}>Home</NavigationItem>
            <NavigationItem to={"/books"}>Get Books</NavigationItem>
            <NavigationItem to={"/about"}>About Us</NavigationItem>
            {props.isAuth ?
                <Auxiliary>          
                    <NavigationItem to = {"/orders"}>My Orders</NavigationItem>
                    <Link to = {"/"} onClick={()=>dispatch(actions.logout())} className={classes.signIn}>Logout</Link>
                </Auxiliary>
                :<Link to = {"/login"} className={classes.signIn}>Login/SignUp</Link>
            }        
        </ul>
    )
}

export default NavigationItems