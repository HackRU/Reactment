import React, { useState, useRef } from 'react';

const fillSet = (words, set) => {
  words.forEach((word) => {
    set.add(word);
    //add capitalized counterpart
    set.add(word.charAt(0).toUpperCase() + word.slice(1));
  });
}

const notWordSet = new Set();
const notWords = ['should', 'could', 'would', 'do', 'is', 'are', 'does', 'have'];

const haveWordSet = new Set();
const haveWords = ['should', 'could', 'would'];

fillSet(notWords, notWordSet);
fillSet(haveWords, haveWordSet);

const createContractions = (sentence) => {
  const words = sentence.split(' ');

  const newSentence = [];

  for(let i = 1; i < words.length; i++) {

    if(words[i] === 'have' && haveWordSet.has(words[i-1])) {
      newSentence.push(words[i-1] + '\'ve');
      i += 1;
    } else if(words[i] === 'not' && notWordSet.has(words[i-1])) {
      newSentence.push(words[i-1] + 'n\'t');
      i += 1;
    } else {
      newSentence.push(words[i-1]);
    }
  }

  const lastWord = words[words.length - 1];
  if(lastWord !== 'have' && lastWord !== 'not')
    newSentence.push(words[words.length - 1]);
  return newSentence.join(' ');
}

function Contractions() {
  const [input, setInput] = useState("");
  const [sentence, setSentence] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSentence(createContractions(input));
  }

  return (
    <div style={{
      'width': '100%',
      'display': 'flex',
      'justifyContent': 'center',
      'flexDirection': 'column',
      'alignItems': 'center',
    }
    }>
      <h1 style={{'display': 'block'}}>
        <strong>Contraction-Creator 9000</strong>
      </h1>
      <div>
        Type a sentence and I'll add some contractions!!!! (e.g. do not ={'>'} don't)
      </div>
      <input type='text' ref={inputRef} style={{'marginBottom': '10px', 'marginTop': '10px'}}
      onChange={handleChange}>

      </input>

      <input type='submit' onClick={handleSubmit} value='Contractify!'></input>
      <div>
        {sentence}
      </div>
    </div>
  )
}

export default Contractions;