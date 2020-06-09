import React, {Component} from 'react';
import styles from './ChatBox.module.css';

import ChatMessage from './ChatMessage';

export default class ChatBox extends Component {
    state = {
        messages: [{
            from: 'Bot',
            message: "I didn't quite understand that, please try rephrasing what you said.",
            date: new Date().toLocaleTimeString(),
        }, {
            from: 'You',
            message: 'Help!',
            date: new Date().toLocaleTimeString(),
        }],
    }

    render() {
        return (
            <div className={styles.container}>
              <span className={styles.title}>ReactMent Help</span>
              <div className={styles.body}>
                {this.state.messages.map(msg => (<ChatMessage {...msg} />))}
              </div>
              <div className={styles.footer}>
                <input type='text' placeholder='Enter your question...' />
                <span>&gt;</span>
              </div>
            </div>
        );
    }
}
