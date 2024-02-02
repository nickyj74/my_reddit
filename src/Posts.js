import React from 'react';
import PostItem from './PostItem';
import './Posts.css';

function Posts() {
  const posts = [
    {
      // upvote: 547,
      // image: 'https://unsplash.com/photos/aerial-shot-of-forest-2Hzmz15wGik',
      // title: 'Questions about new wallet',
      // user: 'theindependentonline',
      // subreddit: 'politics',
      // comment_count: 284,
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