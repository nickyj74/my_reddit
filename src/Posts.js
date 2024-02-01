import React from 'react'
import PostItem from './PostItem'
import './Posts.css'


// ** Need to create a dynamic and automatically updating post feed to complete this app **
// ** Also need to create automatic updating information for posts ** 
// ** Need to add dynamic links, interpolated and straight to Reddit for up to date posts **

export default function Posts() {
  const posts = [
    {
        upvote: 547,
        image: 'https://unsplash.com/photos/aerial-shot-of-forest-2Hzmz15wGik',
        title: 'Questions about new wallet',
        user: 'theindependentonline',
        subreddit: 'politics',
        comment_count: 284,
    },
    {
      upvote: 547,
      image: 'https://unsplash.com/photos/aerial-shot-of-forest-2Hzmz15wGik',
      title: 'Questions about new wallet',
      user: 'theindependentonline',        
      subreddit: 'politics',
      comment_count: 284,
    },
    {
      upvote: 547,
      image: 'https://unsplash.com/photos/aerial-shot-of-forest-2Hzmz15wGik',
      title: 'Questions about new wallet',
      user: 'theindependentonline',
      subreddit: 'politics',
      comment_count: 284,
    },
    {
      upvote: 547,
      image: 'https://unsplash.com/photos/aerial-shot-of-forest-2Hzmz15wGik',
      title: 'Questions about new wallet',
      user: 'theindependentonline',
      subreddit: 'politics',
      comment_count: 284,
    },
]
  return (
      <div className='posts'>
          {posts.map(post => (
              <PostItem post={post} />
          ))}
      </div>
    )
} 

