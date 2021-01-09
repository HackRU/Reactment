import React, {Component} from 'react';
import styles from './ChatBox.module.css';

import ChatMessage from './ChatMessage';

export default class ChatBox extends Component {

    constructor(){
      super();
        this.state1 = {
          diffX: 0,
          diffY: 0,
          dragging: false
        }

        this.dragStart = this.dragStart.bind(this);
        this.dragging = this.dragging.bind(this);
        this.dragEnd = this.dragEnd.bind(this);


    }

    dragStart(e) {
       this.setState({
           diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
           diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
           dragging: true
       });
     }

   dragging(e) {
       document.addEventListener('mousemove', e =>{
         if(this.state.dragging) {
         var left = e.screenX - this.state.diffX;
         var top = e.screenY - this.state.diffY;
         this.setState({
             styles: {
                 left: left,
                 top: top
               }
           });
        }
       });


   }

   dragEnd(e) {
      if(this.state.dragging){
        document.addEventListener('mouseup', e =>{
          this.setState({
              dragging: false
          });
        });
      }

       this.setState({
           dragging: false
       });

   }
    state = {messages: [], question: ''}

    onChange = e => this.setState({question: e.target.value})
    onSend = () => {
        if (this.state.question === '')
            return;

        this.setState(state => ({
            messages: [{
                from: 'You',
                message: state.question,
                date: new Date().toLocaleTimeString(),
            }, ...state.messages],
            question: '',
        }));

        setTimeout(() => this.setState(state => ({
            messages: [{
                from: 'ReactMent Bot',
                message: "I didn't quite understand that, please try rephrasing what you said.",
                date: new Date().toLocaleTimeString(),
            }, ...state.messages],
        })), 500);
    }


    render() {
        return (
            <div id="box" className={styles.container} style={this.state.styles} onMouseDown={this.dragStart} onMouseMove={this.dragging} onMouseUp={this.dragEnd}>
              <span className={styles.title}>ReactMent Help</span>
              <div className={styles.body}>
                {this.state.messages.map((msg, i) => (<ChatMessage key={i} {...msg} />))}
              </div>
              <div className={styles.footer}>
                <input
                  type='text'
                  placeholder='Enter your question...'
                  value={this.state.question}
                  onChange={this.onChange}
                  onKeyPress={e => e.key === 'Enter' && this.onSend()} />
                <span onClick={this.onSend}>&gt;</span>
              </div>
            </div>
        );
    }
}
