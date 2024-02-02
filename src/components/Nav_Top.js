import React from 'react';
import '../stylesheets/Nav_Top.css';

export default function Nav_Top() {
  return (
    <div className='nav_top'>
        <div className='nav_left'>
            <ul>
                <li><a href='/r/all' className='all'>All</a></li>
                <li><a href='/r/popular/top/?t=week' className='popular'>Popular</a></li>
                <li><a href='/r/random' className='random'>Random</a></li>
                <li><a href='/r/AskReddit' className='ask'>Ask Reddit</a></li>
                <li><a href='/r/todayilearned' className='today'>Today I Learned</a></li>
            </ul>
        </div>
    </div>
  )
}
