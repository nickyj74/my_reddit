import React from 'react';
import '../stylesheets/SideNav.css';
import reddit_logo from '../images/reddit_logo.png';

function SideNav() {
  const menus = [
    { to: '/r/all', text: 'Main Reddit Feed'},
    { to: '/r/popular/top/?t=week', text: 'Popular'}, 
    { to: '/r/AskReddit', text: 'Ask Reddit'}
  ]
  const subreddits = [
    "webdev",
    "todayilearned",
    "random",
    "pics",
    "videos",
    "funny",
    "jokes",
    "showerthoughts",
    "television",
    "uknews"
  ]

  return (
    <div className='sidenav'>
      <div className='sidenav_logo'>
        <img src={ reddit_logo } />
      </div>
      <hr />
      <div className='sidenav_links'>
        <ul className='sidenav_menu'>
          {menus.map(menu => (
            <li><a href={menu.to}>{menu.text}</a></li>
          ))}
        </ul>
        <hr />
        <ul className='sidenav_subreddit'>
            {subreddits.map(subreddit => (
              <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default SideNav;