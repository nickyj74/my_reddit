import React, { useState, useEffect } from 'react';
import '../stylesheets/Header.css';
import Article from './Article';

function Header() {

    {/* --- Seems to be a repeat of code written into PostItem.js ----
    ---- Want my header to be different, not incorporating the search function within, as that needs to be separate ----


    const [articles, setArticles] = useState([]);

    const [subreddit, setSubreddit] = useState('webdev');

    useEffect(() => {
        fetch('https://www.reddit.com/r/popular.json').then(res => {
            if (res != 200) {
                console.log('ERROR! ERROR!');
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
    <div className='header'>
        <header className='search_header'>
            <input type='text' className='input' value='popular' />
        </header>
        <div className='header_articles'>
            // <Article /> 
        </div>
    </div>
  );
}
*/}


}

export default Header;