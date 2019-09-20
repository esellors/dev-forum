import React from 'react';

class AddPost extends React.Component {
   constructor() {
      super();
      this.state = {
         userPost: ''
      };
   };
   handleInput = e => {
      this.setState({userPost: e.target.value})
   }
   handleSubmit = () => {
      const newPost = {
         userId: this.props.userId,
         topicId: +this.props.topicId,
         userPost: this.state.userPost
      }

      this.props.addPost(newPost)
   }
   render() {
      return (
         <div id='AddPost'>
            <h2>AddPost</h2>
            <input onChange={this.handleInput} />
            <button onClick={this.handleSubmit}>Submit</button>
         </div>
      );
   }
}

export default AddPost;