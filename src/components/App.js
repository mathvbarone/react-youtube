import React from "react";
import SearchBar from "./SearchBar";
import { getYoutubeVideos } from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const data = await getYoutubeVideos(term);
        return this.setState({ videos: data.items });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };


    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;