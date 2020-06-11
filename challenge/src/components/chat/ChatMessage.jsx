import React, {Component} from 'react';
import styles from './ChatMessage.module.css';

export default function ChatMessage({from, message, date}) {
    return (
        <div className={styles.container}>
          <div className={styles.badge}><span>{from}</span></div>
          <div className={styles.body}>
            <div className={styles.header}>
              <span className={styles.from}>{from}</span>
              <span className={styles.date}>{date}</span>
            </div>
            <span>{message}</span>
          </div>
        </div>
    );
}
