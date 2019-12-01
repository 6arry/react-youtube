import axios from 'axios';

// This api key can only be used on localhost:3000
const KEY = 'AIzaSyBIfSzG-N7Q2tZiYU8lvx25yiKLVib3bBk';

// instance of axios; pre-configured
// for out GET request to the youtube api
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY // our KEY variable
    }
})