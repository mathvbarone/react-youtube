export const getYoutubeVideos = async term => {
    const KEY = 'AIzaSyAqDkiYeH4nkKd2ewO8y4WDR7S8XF9A82s';
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&key=${KEY}`);
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}




