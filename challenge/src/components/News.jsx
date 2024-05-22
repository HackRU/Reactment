import React, { useState, useEffect } from 'react'
import './newsStyles.css';


export default function News() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        var url = 'https://newsapi.org/v2/everything?' + 
          'q=Rutgers&' + 
          'searchIn=title&' +
          'sortBy=publishedAt&' +
          'pageSize=3&'+
          'apiKey=b29570ce17404b19aac9bf15b69cc21c';

          var req = new Request(url); 

          fetch(req)
              .then(response => response.json())
                .then(data => setArticles(data.articles))
                .catch(err => console.log(err))      
              
    }, [])

            
    return (
        <div class = "newsContainer">

            <h1>Whats up with Rutgers?</h1>
            <ul className = "articleList">

                {articles.map((list, index)=> (
                    
                    <li className='article' key={index}><a href = {list.url} target="_blank"> {list.title}</a>  
                    <h3>Date & Time Published: {list.publishedAt}</h3></li>
                    
                ))}
            </ul>
            


        </div>
        

    );

}