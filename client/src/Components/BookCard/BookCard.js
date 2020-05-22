import React from 'react'
import classes from './BookCard.module.css'

const BookCard=(props)=>{
    return(
        <div className={classes.card}>
            <div className={classes.top-section}>
                <img id="image-container" 
                src="https://image.freepik.com/free-photo/feather-texture-background-with-orange-light_32525-101.jpg" />
                <div className={classes.price}>Rs. {props.price}</div>
            </div>
            <div className={classes.product-info}>
                <div className={classes.name}>{props.title}</div>
                <div className={classes.dis}>{props.author}</div>
                <button className={classes.btn} onClick={props.addToCart} >ADD TO CART</button>
            </div>
        </div>
    )
}

export default BookCard