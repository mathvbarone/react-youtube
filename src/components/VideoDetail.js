import React from "react";

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading...</div>
    }

    const { title, description } = video.snippet;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <section>
            <section className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </section>
            <section className="ui segment">
                <h4 className="ui header">{title}</h4>
                <p>{description}</p>
            </section>
        </section>
    );
};

export default VideoDetail;