import React from 'react';
import './GuestLanding.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {loginUser, registerUser} from '../../redux/reducers/userReducer';

class GuestLanding extends React.Component {
   constructor() {
      super();
      this.state = {
          firstName: '',
          username: '',
          password: ''
      };
   };
   handleSubmit = e => {
      e.preventDefault();
      const formName = e.target.name;
      const {firstName, username, password} = this.state;
      const {loginUser, registerUser} = this.props;
      
      if (formName === 'login') {
         loginUser({username, password})
      } else if (formName === 'register') {
         registerUser({firstName, username, password})
      }
   }
   handleInput = e => {
      this.setState({[e.target.name]: e.target.value})
   }
   render() {
      if (this.props.userId) {
         return <Redirect to='/topics' />
      }

      return (
         <div id='GuestLanding' className='views'>
            <h1>Welcome</h1>
            <h4>Please login or register</h4>
            <form name='login' onSubmit={this.handleSubmit}>
               <h2>Existing Users</h2>
               <label>username:</label>
               <input 
                  name='username' 
                  onChange={this.handleInput} 
               />
               <label>password:</label>
               <input 
                  name='password' 
                  onChange={this.handleInput}
               />
               <button type='submit'>submit</button>
            </form>
            <form name='register' onSubmit={this.handleSubmit}>
               <h2>New Users</h2>
               <label>first name:</label>
               <input 
                  name='firstName' 
                  onChange={this.handleInput} 
               />
               <label>username:</label>
               <input 
                  name='username' 
                  onChange={this.handleInput} 
               />
               <label>password:</label>
               <input 
                  name='password' 
                  onChange={this.handleInput} 
               />
               <button type='submit'>submit</button>
            </form>
         </div>
      );
   }
}

const mapStateToProps = reduxState => {
   return {
      userId: reduxState.userReducer.userId
   }
}

export default connect(mapStateToProps,
   {
      loginUser,
      registerUser
   }
)(GuestLanding);