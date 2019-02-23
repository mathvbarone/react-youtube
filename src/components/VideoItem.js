import './VideoItem.css'
import React from 'react';

const Videoitem = ({ video, onVideoSelect }) => {

    const { title, thumbnails } = video.snippet;

    return (
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img alt={title} className="ui image" src={thumbnails.medium.url} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
};

export default Videoitem;