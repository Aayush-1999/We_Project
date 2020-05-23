import React, {Component} from 'react'
import axios from 'axios'
import BookCard from '../../Components/BookCard/BookCard';
import {connect} from 'react-redux';
import classes from './Book.module.css'

const books=[
    {
        title:"The Power of Your Subconscious Mind",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqd2seaJY7-61EYrZz-4FkZPinLXiXkLl3R6D3m_6b1b9Z5M1cUfHdic2xDeQ&usqp=CAc",
        price:277,
        author:"Dr. Joseph Murphy"
    },
    {
        title:"Think and Grow Rich Paperback",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqL3ucMqBMM3UoKVyQkMFDZaXY8WxkEaiVAx9mXiyDveRMdDpA&usqp=CAU",
        price:100,
        author:"Napoloean Hill"
    },
    {
        title:"The Power of Your Subconscious Mind",
        url:"https://images.penguinrandomhouse.com/cover/9781585427680",
        price:499,
        author:"Joseph Murphy"
    },
    {
        title:"The Monk Who Sold His Ferrari",
        url:"https://images-na.ssl-images-amazon.com/images/I/71HJacyavHL.jpg",
        price:389,
        author:"Robin Sharma"
    },
    {
        title:"As a Man Thinketh Paperback",
        url:"https://www.seeken.org/wp-content/uploads/2018/09/As-a-Man-Thinketh-Summary-by-James-Allen-1280x720.jpg",
        price:789,
        author:"James Allen"
    },
    {
        title:"The Theory of Everything",
        url:"https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg",
        price:210,
        author:"Stephen Hawking"
    }
]

class Books extends Component{
    state={
        isOrdered:[false]
    }
    
    addToCardHandler=(book,index)=>{
        axios.post("/book",{
            id:this.props.userId,
            book:book
        })
        .then(response=>{
            console.log(response)
            if(response.status===200){
                let newOrdered=this.state.isOrdered
                newOrdered[index]=true
                this.setState({isOrdered:newOrdered})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div className={classes.container}>
                {books.map((book,index)=>{
                    return(
                        <div className={classes.cardContainer} key={index}>
                            <BookCard 
                                key={index}
                                price={book.price} 
                                ordered={this.state.isOrdered[index]} 
                                title={book.title} 
                                author={book.author} 
                                addToCart={()=>this.addToCardHandler(book,index)} 
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        userId:state.auth.userId
    }
}

export default connect(mapStateToProps)(Books);