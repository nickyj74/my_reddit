import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <ul>
                <li><a href='/r/all' className='active'>All</a></li>
                <li><a href='/r/popular/top/?t=week'>Popular</a></li>
                <li><a href='/r/random'>Random</a></li>
                <li><a href='/r/AskReddit'>Ask Reddit</a></li>
                <li><a href='/r/todayilearned'>Today I Learned</a></li>
            </ul>
        </div>
        <div className='header_right'>
            <i className='fas fa-bell'></i>
            <img src='' />
            <div className='header_user'>
                <span>Nicky Jarvis</span>
                <i className='fas fa-caret-down'></i>
            </div>
        </div>
    </div>
  )
}
