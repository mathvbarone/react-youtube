import React from "react";
import SearchBar from "./SearchBar";
import { getYoutubeVideos } from "./apis/youtube";


class App extends React.Component {

    state = { videos: [] };

    onTermSubmit = async term => {
        const data = await getYoutubeVideos(term);
        return this.setState({ videos: data.items });
    };


    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}
export default App;
