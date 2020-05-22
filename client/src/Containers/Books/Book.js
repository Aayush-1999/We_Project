import React, {Component} from 'react'
import axios from 'axios'
import BookCard from '../../Components/BookCard/BookCard';

class Books extends Component{

    addToCardHandler=()=>{

    }

    render(){
        return(
            <div className={classes.container}>
                <BookCard price={} title={} author={} addToCart={addToCardHandler} />
            </div>
        )
    }
}

export default Books