import React, {Component} from 'react';
import styles from './AnnouncementComponent.module.css';

export default class AnnouncementList extends Component {
    state = {announcements: []}

    async componentDidMount() {
        const response = await fetch('https://api.hackru.org/prod/dayof-slack')
        const json = await response.json();
        this.setState({
            announcements: json.body
        });
    }

    render () {
        const { announcements } = this.state;
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {announcements.map((announcement, i) => (
                    <p key={i}>
                        {announcement.text}
                    </p>
                ))}
            </div>

        )
    }
}