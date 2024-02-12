import React from 'react';
import PostItem from './Home';
import '../stylesheets/Posts.css';

function Posts() {
  const posts = [
    {
      // Iniitally created a section for posts, but needed to be updated manually, went on to create a dynamic search and retrieve in the Home.js file
      // Too nervous to delete this
    },
    
]
  return (
      <div className='posts'>
          {posts.map(post => (
              <PostItem post={post} />
          ))}
      </div>
    );
} 

export default Posts;