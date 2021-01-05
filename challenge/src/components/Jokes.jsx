import React, { Component } from 'react';
import dislikeImg from './images/dislike.png';
import likeImg from './images/like.png';
import jokeList from './jokesData.json';

class Jokes extends Component {
    
	constructor(props) {
        super(props);
        const jokes = jokeList.list;
        const randomJoke = jokes[parseInt(Math.random() * jokes.length)]; 
        this.state = {
            textArea: randomJoke
        };
        this.dislikeClick = this.dislikeClick.bind(this);
      }
    
    dislikeClick(e) {
        const jokes = jokeList.list;
        const randomJoke = jokes[parseInt(Math.random() * jokes.length)]; 

        this.setState({
            textArea: randomJoke
        });
        
    }

	render() {
		return (
            <>
                <div id='generator' 
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 10
                    }}
                >
                    <h1 value='textArea' style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                        <center>
                            {this.state.textArea}
                        </center>
                    </h1>
                </div>

                <h2 style={{ fontSize: 18, color: "#A9A9A9"}}>
                    <center>Haha, did you get it, ha, ha...</center>
                </h2>

                <div id='thumbs'>
                    <center>
                        <img 
                            width='100px'
                            src={likeImg}
                            alt='Like button'
                        />
                        <img 
                            width='100px'
                            src={dislikeImg} 
                            alt='Dislike button'
                            onClick={this.dislikeClick} />
                    </center>
                </div>
                
            </>
		);
	}
}
export default Jokes;
