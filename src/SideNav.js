import React from 'react'

function SideNav() {
  const menus = [
    { to: '/r/all', text: 'All'},
    { to: '/r/popular/top/?t=week', text: 'Popular'}, 
    { to: '/r/AskReddit', text: 'Ask Reddit'}
  ]
  const subreddits = [
    "random",
    "pics",
    "videos",
    "funny",
    "jokes",
    "todayilearned",
    "showerthoughts",
    "webdev",
    "television",
    "uknews"
  ]

  return (
    <div className='sidenav'>
      <div className='sidenav_logo'>
        <img src='' />
      </div>
      <div className='sidenav_search'>
        <input type='text' name='search' placeholder='Search' />
      </div>
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

export default SideNav