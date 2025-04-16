import React, { useState, useEffect } from 'react';
import './headlineStyles.css';


export default function Headlines() {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const now = new Date();
        const isoString = now.toISOString();
        fetch(`https://newsapi.org/v2/everything?q=rutgers&searchIn=title&sortBy=publishedAt&apiKey=d96f06c59026476fad99574df2b51f09`)
        .then((response) => response.json())

        .then((data) => {
            console.log(data);
            setHeadlines(data.articles.slice(0, 3));
        })
        

    
    }, [])

    return(
        <div className= "headlinesDiv">
        <h1 className = "mainHeading"> Recent Rutgers Rundowns</h1>
        <ul className = "articlesList">
                {headlines.map((list, index)=> (
                        <li key={index}>
                            <a href = {list.url} target="_blank" rel="noopener noreferrer"> {list.title}</a>  
                        <h3 className = "dates">{new Date(list.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</h3></li>
                    ))}
            </ul>
        </div>
    );

}

