import React, { useEffect, useState } from 'react';
import ad1 from './Ads/images/Ads(1).jpg';
import ad2 from './Ads/images/Ads(2).jpg';
import ad3 from './Ads/images/Ads(3).jpg';
import ad4 from './Ads/images/Ads(4).jpg';
import ad5 from './Ads/images/Ads(5).jpg';

export default function RandomAds() {

    const [images] = useState([ad1, ad2, ad3, ad4, ad5]);
    const [selectedImage, setSelectedImage] = useState(ad4);

    useEffect(() => {
        setInterval(() => {
            var ran = Math.floor(Math.random() * images.length);
            setSelectedImage(images[ran]);
        }, 2000);
    }, []);

    return (
        <div>
            <img
                src={selectedImage}
                style={{
                    height: '50%',
                    weight: '15%',
                    position: 'absolute',
                    top: '25%',
                    right: '0%',
                }}
                alt="Random Ads"
            />
        </div>
    );

}