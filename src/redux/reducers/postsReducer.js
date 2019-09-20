import Axios from 'axios';

const initialState = {
   topics: [],
   posts: []
}

const UPDATE_TOPICS = 'UPDATE_TOPICS';
const UPDATE_POSTS = 'UPDATE_POSTS';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';

export function updateTopics() {
   return {
      type: UPDATE_TOPICS,
      payload: Axios.get('/api/topics')
   }
}

export function updatePosts(topicId) {
   return {
      type: UPDATE_POSTS,
      payload: Axios.get(`/api/posts/${topicId}`)
   }
}

export function addPost(newPost) {
   return {
      type: ADD_POST,
      payload: Axios.post('/api/posts/', newPost)
   }
}

export function editPost(postInfo) {
   return {
      type: EDIT_POST,
      payload: Axios.put('/api/posts/', postInfo)
   }
}

export function deletePost(postInfo) {
   return {
      type: DELETE_POST,
      payload: Axios.delete('/api/posts/', { data: postInfo})
   }
}

export default function reducer(state = initialState, action) {
   const {type, payload} = action;
   console.log(payload)

   switch(type) {
      case `${UPDATE_TOPICS}_FULFILLED`:
         return {
            ...state,
            topics: payload.data
         }
      case `${UPDATE_POSTS}_FULFILLED`:
         return {
            ...state,
            posts: payload.data
         }
      case `${ADD_POST}_FULFILLED`:
         return {
            ...state,
            posts: payload.data
         }
      case `${EDIT_POST}_FULFILLED`:
         return {
            ...state,
            posts: payload.data
         }
      case `${DELETE_POST}_FULFILLED`:
         return {
            ...state,
            posts: payload.data
         }
      default: return state;
   }
}