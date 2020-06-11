import React, {Component} from 'react';
import styles from './AnnouncementComponent.module.css';

export default class AnnouncementList extends Component {
    state = {announcements: [], loading: true}

    async componentDidMount() {
        const response = await fetch('https://api.hackru.org/prod/dayof-slack')
        const json = await response.json();
        this.setState({
            loading: false,
            announcements: json.body.map(a => ({
                ...a,
                ts: new Date(parseFloat(a.ts) * 1000).toLocaleTimeString()
            }))
        });
    }

    render () {
        const { announcements , loading} = this.state;
        return (
            <div className = {styles.announcementContainer}>
                {loading ? (<p>Loading...</p>) : 
                announcements.map((announcement, i) => (
                    <p key={i}>
                        {announcement.ts}  {announcement.text}
                    </p>
                ))}
            </div>

        )
    }
}