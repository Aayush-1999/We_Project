import React, { Component } from 'react'
import AuthWrapper from '../../Components/UI/AuthWrapper/AuthWrapper'
import classes from './Register.module.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import SimpleReactValidator from 'simple-react-validator';

class Register extends Component{
    constructor() {
        super()
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className={classes.validation}>{message}</div>
        });
      }

    state = {
        registerData:{     
            name:null, 
            email:null,
            password:null     
        },
        errors:{ 
            name:"",  
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

    registerSubmitHandler=()=>{
        if (this.validator.allValid()) {
            const newUser = {
                name: this.state.registerData.name,
                email: this.state.registerData.email,
                password: this.state.registerData.password,
              };   
            this.props.onRegisterSubmit(newUser)
            if(this.props.isAuth){
                this.props.history.push("/books")
            }
        } else {
          this.validator.showMessages();
        
      }
        
    }

    changeHandler=(e,identifier)=>{
        let formInvalid = this.state.formInvalid
        let updatedData = {
            ...this.state.registerData
        }
       let updatedElement = {
            ...updatedData[identifier]
        }
        updatedElement = e.target.value
        updatedData[identifier] = updatedElement
        if (this.validator.allValid()) {
            formInvalid = false
          } else {  
            formInvalid = true
            this.validator.showMessages();
        }
       
        this.setState({registerData:updatedData,formInvalid:formInvalid})        
    } 
    
    render(){
        return(
            <AuthWrapper>
                <div className={classes.box}>
                    <p className={classes.heading}>Create Your Account</p>
                    <input className={classes.input} type="text" 
                    value={this.state.registerData.name} 
                    onChange = {(event) => this.changeHandler(event, 'name')}placeholder="Name" />
                    {}
                    {this.validator.message('name', this.state.registerData.name, 'required|alpha')}

                    <input className={classes.input} value={this.state.registerData.email} 
                    onChange = {(event) => this.changeHandler(event, 'email')} type="email"  
                    onBlur={() => this.validator.showMessageFor('email')} placeholder="Email" />
                    {}
                    {this.validator.message('email', this.state.registerData.email, 'required|email')}

                    <input className={classes.input} value={this.state.registerData.password}  
                    onChange = {(event) => this.changeHandler(event, 'password')} type="password"
                    placeholder="Password" />
                    {}
                    {this.validator.message('password', this.state.registerData.password, 'required|min:8')}

                    <input className={classes.input} value={this.state.registerData.password}  
                    placeholder="Confirm Password" type="password" />
                    <button className={classes.registerBtn}  
                    onClick={this.registerSubmitHandler}>Register</button>
                    
                    <div className={classes.register}>
                        <p className={classes.register2}>Already have an account? </p>
                        <Link to = "/login"className={classes.registerLink}>Login here</Link>
                    </div>
                </div>
            </AuthWrapper>  
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onRegisterSubmit:(userData)=>dispatch(actions.register(userData))
    }
}

const mapStateToProps = (state)=>{
    return{
        isAuth : state.auth.token!=null
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)