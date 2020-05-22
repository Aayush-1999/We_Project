import React from 'react'
import classes from "./AuthWrapper.module.css";

const AuthWrapper = (props)=>{
    return(
        <div className={classes.main}>
           <div className={classes.body}>
                <div className= {classes.box}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default AuthWrapper;