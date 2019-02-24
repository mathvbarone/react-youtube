import React from "react";
import SearchBar from "./SearchBar";
import { getYoutubeVideos } from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import debounce from 'lodash.debounce';


class App extends React.Component {

    state = { videos: [], selectedVideo: null };


    componentDidMount() {
        this.onTermSubmit('reactjs');
    }


    onTermSubmit = async term => {
        if (term) {
            const data = await getYoutubeVideos(term);
            return this.setState({
                videos: data.items,
                selectedVideo: data.items[0]
            });
        }
    };


    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };


    render() {
        const videoSearch = debounce(term => this.onTermSubmit(term), 1000);

        return (
            <section className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onInputChange={videoSearch} />
                <section className="ui stackable grid">
                    <section className="ui row">
                        <section className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </section>
                        <aside className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </aside>
                    </section>
                </section>
            </section>
        );
    }
}
export default App;
