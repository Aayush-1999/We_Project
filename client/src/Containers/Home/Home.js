import React, { Component } from 'react'
import Aux from '../../HOC/Auxiliary/Auxiliary'
import classes from './Home.module.css'
import HomeDescription from '../../Components/HomeDescription/HomeDescription'
import MainImage from "../../Assests/Images/image4.jpeg"

class GithubSearch extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.body}>
                    <div className={classes.BigContainer}>
                        <div className={classes.Container}>
                            <p className={classes.heading}>Buy Books anytime, anywhere</p>
                            <div className={classes.inputContainer}>
                                
                            </div>
                        </div>

                        <div className={classes.illustrator}>
                            <img src = {MainImage} alt="main_img"></img>
                        </div>
                    </div>
                </div>
                <HomeDescription/>
            </Aux>
        )
    }
}

export default (GithubSearch);