import React from 'react';
import './Header.css';
import {connect} from 'react-redux';
import {getSession} from '../../redux/reducers/userReducer';

class Header extends React.Component {
   componentDidMount() {
      this.props.getSession();
   }
   render() {
      const{firstName} = this.props;

      return (
         <div id='Header'>
            <h1>DevForum</h1>
            <h4>Hello, {firstName? firstName : 'Guest'}</h4>
         </div>
      );
   }
}

const mapStateToProps = reduxState => {
   return {
      firstName: reduxState.userReducer.firstName
   }
}

export default connect(mapStateToProps,
   {
      getSession
   }
)(Header);