import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID Yf-cBRtTfRWUZKrlpQrR9sgWxcshcd7eIyeQgI5zB1w'

    }

});