import React from 'react';
import './UserLanding.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateTopics} from '../../redux/reducers/postsReducer';

class UserLanding extends React.Component {
   componentDidMount() {
      this.props.updateTopics();
   }
   render() {

      const topicsMapped = this.props.topics.map((topic, i) => {
         return (
            <div key={i} className='topics'>
               <Link to={`/posts/${topic.topic_id}`}>
                  <h1>{topic.topic_name}</h1>
               </Link>
            </div>
         )
      })

      return (
         <div id='UserLanding' className='views'>
            <h1>Topics</h1>
            <span id="topics-mapped">
               {topicsMapped}
            </span>
         </div>
      );
   }
}

const mapStateToProps = reduxState => {
   return {
      topics: reduxState.postsReducer.topics
   }
}

export default connect(mapStateToProps,
   {
      updateTopics
   }
)(UserLanding);