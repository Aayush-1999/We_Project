import React, { Component } from 'react'
import AuthWrapper from '../../Components/UI/AuthWrapper/AuthWrapper'
import classes from './Login.module.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import SimpleReactValidator from 'simple-react-validator';

class Login extends Component{
    constructor() {
        super()
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className={classes.validation}>{message}</div>
        });
    }

    state = {
        loginData:{      
            email:"",
            password:""     
        },
        errors:{   
            email:"",
            password:""
        },
        formInvalid:true
    }

    componentDidMount(){
        console.log(this.props.isAuth)
        if(this.props.isAuth){
            this.props.history.push("/books")
        }
    }

    loginSubmitHandler = ()=>{
        if (this.validator.allValid()) {
            this.props.onLoginSubmit(this.state.loginData.email,this.state.loginData.password);
            if(this.props.isAuth){
                this.props.history.push("/books")
            }
        } else {
          this.validator.showMessages();    
      }
    }

    changeHandler=(e,identifier)=>{
        let updatedData = {
            ...this.state.loginData
        }
        let updatedElement = {
            ...updatedData[identifier]
        }
        updatedElement = e.target.value
        updatedData[identifier] = updatedElement
       
        if (this.validator.allValid()) {
            this.setState({formInvalid:false})
        } 
        else {
            this.setState({formInvalid:true})
            this.validator.showMessages();
        }        
        this.setState({loginData:updatedData})
    }

    render(){
        return(
            <AuthWrapper>
                <div className={classes.box}>
                    <p className={classes.heading}>
                        Welcome back! <br/> Login to your account
                    </p>                    
                    <input className={classes.input} type="email" value={this.state.loginData.email} 
                        onChange = {(event) => this.changeHandler(event, 'email')}
                        placeholder="Email" />
                    {this.validator.message('email', this.state.loginData.email, 'required|email')}
                      
                    <input className={classes.input} type="password" value={this.state.loginData.password}  
                      onChange = {(event) => this.changeHandler(event, 'password')} 
                      placeholder="Password" />
                    {this.validator.message('password', this.state.loginData.password, 'required')}
                      
                    <button className={classes.loginBtn} onClick={this.loginSubmitHandler}>Login</button>
                      
                    <div className={classes.register}>
                        <p className={classes.register2}>Don't have an account?</p>
                        <Link to = "/register" className={classes.registerLink}>Sign Up here</Link>
                    </div>
                </div>
            </AuthWrapper>  
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        isAuth : state.auth.token!=null
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onLoginSubmit:(email,password)=>dispatch(actions.login(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)