import React, { useState, useEffect } from 'react';
import styles from './AnnouncementComponent.module.css';

export default function AnnouncementList() {

    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.hackru.org/prod/dayof-slack');
            const json = await response.json();
            setLoading(false);
            setAnnouncements(
                json.body.map(a => ({
                    ...a,
                    ts: new Date(parseFloat(a.ts) * 1000).toLocaleTimeString()
                }))
            );
        }
        fetchData();
    });

    return (
        <div className={styles.announcementContainer}>
            {loading ? (<p>Loading...</p>) :
                announcements.map((announcement, i) => (
                    <p key={i}>
                        {announcement.ts}  {announcement.text}
                    </p>
                ))}
        </div>

    )

}