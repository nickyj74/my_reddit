import React from 'react';
import '../stylesheets/SideNav.css';
import reddit_logo from '../images/reddit_logo.png';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function SideNav() {
  const menus = [
    { to: 'https://www.reddit.com', text: 'Reddit.com'},
    { to: 'https://www.reddit.com/r/popular/top/?t=week', text: 'r/popular'}, 
    { to: 'https://www.reddit.com/r/AskReddit', text: 'r/AskReddit'}
  ]
  const subreddits = [
    "r/webdev",
    "r/todayilearned",
    "r/random",
    "r/pics",
    "r/videos",
    "r/funny",
    "r/jokes",
    "r/showerthoughts",
    "r/television",
    "r/uknews"
  ]

  return (
    <div className='sidenav'>
      <div className='sidenav_logo'>
          <img src={ reddit_logo } alt='reddit.logo'/>
      </div>
      <hr />
      <div className='external_side'>External Links <br /><br /><MdKeyboardDoubleArrowDown /></div>
      <hr />
      <div className='sidenav_links'>
        <ul className='sidenav_menu'>
          {menus.map(menu => (
            <li><a href={menu.to}>{menu.text}</a></li>
          ))}
        </ul>
        <ul className='sidenav_subreddit'>
            {subreddits.map(subreddit => (
              <li><a href={`https://www.reddit.com/r/${subreddit}`}>{subreddit}</a></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default SideNav;