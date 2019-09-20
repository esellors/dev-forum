import React from 'react';
import './Posts.css';
import {connect} from 'react-redux';
import {updatePosts, addPost, deletePost} from '../../redux/reducers/postsReducer';
import AddPost from '../AddPost/AddPost';

class Posts extends React.Component {
   componentDidMount() {
      this.props.updatePosts(this.props.match.params.topicId);
   }
   handleDelete = (topicId, postId) => {
      const postInfo = {topicId, postId}
      console.log(topicId)
      console.log(postId)

      this.props.deletePost(postInfo);
   }
   render() {
      const postsMapped = this.props.posts.map((post, i) => {
         return (
            <div key={i} className='posts'>
               <h2>{post.username}</h2>
               <p>{post.user_post}</p>
               {
                  this.props.userId === post.user_id
                  ? (
                     <>
                        <button>edit</button>
                        <button onClick={() => this.handleDelete(post.topic_id, post.post_id)}>delete</button>
                     </>
                  )
                  : null
               }
            </div>
         )
      })

      return (
         <div id='Posts' className='views'>
            <h1>Posts</h1>
            <AddPost userId={this.props.userId} addPost={this.props.addPost} topicId={this.props.match.params.topicId}/>
            <span id='posts-mapped'>
               {postsMapped}
            </span>
         </div>
      );
   }
}

const mapStateToProps = reduxState => {
   return {
      posts: reduxState.postsReducer.posts,
      userId: reduxState.userReducer.userId
   }
}

export default connect(mapStateToProps,
   {
      updatePosts,
      addPost,
      deletePost
   }
)(Posts);