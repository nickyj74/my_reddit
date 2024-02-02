import React, {useState, useEffect} from 'react';
import '../stylesheets/PostItem.css';
import Article from './Article';

export default function PostItem(props) {
    
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('webdev');

    useEffect(() => {
        fetch('https://www.reddit.com/r/popular.json').then(res => {
            if (res.status != 200) {
                console.log('ERRORERROR');
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
         <div className='post'>
                <div className='articles'> {/* Loop through given articles */}
                    {
                        (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
                    }
                
            </div>
        </div>
    )
};
