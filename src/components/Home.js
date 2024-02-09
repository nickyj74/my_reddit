import React, { useState, useEffect } from 'react';
import '../stylesheets/Home.css';
import Article from './Article';

export default function PostItem(props) {
    
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('webdev');

    useEffect(() => {
        fetch('https://www.reddit.com/r/'+ subreddit +'.json').then(res => {
            if (res.status !== 200) {
                console.log('ERROR, ERROR');
                return;
            }

            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            });
        })
    }, [subreddit]);

    return (
        <div>
            <div className='nav_top'>
                <div className='nav_left'>
                    <ul>
                        <li><a href='https://www.reddit.com/r/all' className='all'>All</a></li>
                        <li><a href='https://www.reddit.com/r/popular/top/?t=week' className='popular'>Popular</a></li>
                        <li><a href='https://www.reddit.com/r/random' className='random'>Random</a></li>
                        <li><a href='https://www.reddit.com/r/AskReddit' className='ask'>Ask Reddit</a></li>
                        <li><a href='https://www.reddit.com/r/todayilearned' className='today'>Today I Learned</a></li>
                    </ul>
                </div>
            </div>
            <div className='header'>
                <header className='search_header'>
                    <input type='text' className='input' value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
                </header>
            </div>
            <div className='post'>
                <div className='articles'> {/* Loop through articles */}
                    {
                        (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
                    }
                </div>
            </div>
        </div>
    )
};
