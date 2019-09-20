import React from 'react';
import './Header.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getSession, logoutUser} from '../../redux/reducers/userReducer';

class Header extends React.Component {
   componentDidMount() {
      this.props.getSession();
   }
   handleLogout = () => {
      this.props.logoutUser();
      this.props.history.push('/');
   }
   render() {
      const {firstName} = this.props;
      const alias = firstName ? firstName : 'Guest'
      
      return (
         <div id='Header'>
            <h1>DevForum</h1>
            <h4>Hello, {alias}</h4>
            {
               firstName ? <button onClick={this.handleLogout}>Logout</button> : null
            }
         </div>
      );
   }
}

const mapStateToProps = reduxState => {
   return {
      firstName: reduxState.userReducer.firstName
   }
}

export default withRouter(connect(mapStateToProps,
   {
      getSession,
      logoutUser
   }
)(Header));