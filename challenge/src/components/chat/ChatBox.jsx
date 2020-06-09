import React, {Component} from 'react';
import styles from './ChatBox.module.css';

import ChatMessage from './ChatMessage';

export default class ChatBox extends Component {
    state = {messages: [], question: ''}

    onChange = e => this.setState({question: e.target.value})
    onSend = () => {
        if (this.state.question == '')
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
            <div className={styles.container}>
              <span className={styles.title}>ReactMent Help</span>
              <div className={styles.body}>
                {this.state.messages.map(msg => (<ChatMessage {...msg} />))}
              </div>
              <div className={styles.footer}>
                <input
                  type='text'
                  placeholder='Enter your question...'
                  value={this.state.question}
                  onChange={this.onChange}
                  onKeyPress={e => e.key == 'Enter' && this.onSend()} />
                <span onClick={this.onSend}>&gt;</span>
              </div>
            </div>
        );
    }
}
