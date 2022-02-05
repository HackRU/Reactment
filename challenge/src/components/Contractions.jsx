import React, { useState, useRef } from 'react';

  //part of the n't list
  //should, could, would

  //[wordA, wordB]
  //if wordB is either not and have, check wordA in it's respective array

  //if wordB is not, check the not word dictionary and then add correct word

const createContractions = {

}

function Contractions() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleInput = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <div style={{
      'width': '100%',
      'display': 'flex',
      'justify-content': 'center',
      'flex-direction': 'column',
      'align-items': 'center',
    }
    }>
      <h1 style={{'display': 'block'}}>
        <strong>Contraction-Creator 9000</strong>
      </h1>
      <div>
        Type a sentence and I'll add some contractions. (e.g. do not => don't). I'm like that.
      </div>
      <input type='text' ref={inputRef} style={{'margin-bottom': '10px'}}>

      </input>

      <input type='submit'></input>
    </div>
  )
}

export default Contractions;