import axios from 'axios';

const KEY = 'AIzaSyBIfSzG-N7Q2tZiYU8lvx25yiKLVib3bBk';

// instance of axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})