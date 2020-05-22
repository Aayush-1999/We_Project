import React from 'react'
import {Link} from 'react-router-dom'
import classes from './HomeDescription.module.css'
import image1 from '../../Assests/Images/Image1.jpg'
import compareImage from '../../Assests/Images/image2.jpeg'
import statsImage from '../../Assests/Images/image3.jpg'

const HomeDescription = (props)=>{
    return(
        <div>
            <div className={classes.searchContainer}>
                <div className={classes.searchIllustration}>
                    <img src={image1} alt="image1" ></img>
                    <div className={classes.searchContent}>
                        <p className={classes.SearchHeading}>Books suggestion</p>
                        <p className={classes.searchData}>
                             Get the books suggestion according to your recentt search and orders.</p>
                    </div>
                </div>
            </div>
            <div className={classes.compareContainer}>
                    <div className={classes.compareContent}>
                        <p className={classes.compareHeading}>Bookspedia </p>
                        <p className={classes.compareData}>Buy books of any genre and author.
                             Get top rated and best quality books.
                             </p>
                            <button className={classes.CompareBtn}>
                                 <Link className={classes.btnText} to="/books">Get Books</Link>
                            </button>
                    </div>
                    <div className={classes.compareIllustration}>
                    <img src={compareImage} alt="image2" ></img>
                </div>
            </div>
            <div className={classes.searchContainer}>
                <div className={classes.statIllustration}>
                    <img src={statsImage} alt="image3" ></img>
                </div>
                <div className={classes.searchContent}>
                    <p className={classes.SearchHeading}>Login/Signup</p>
                    <p className={classes.searchData}>
                       Make a Account with us to have buy and explore the books we offer.
                    </p>
                    <button className={classes.SignUpbtn}>
                        <Link className={classes.btnText} to="/register">
                            Sign Up Now 
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HomeDescription