import axios from 'axios';

    // const axiosSecure = axios.create({
    //     baseURL : `http://localhost:5000`
    // })

    const axiosSecure = axios.create({
        baseURL : `https://recipi-hut-server-site.vercel.app/`
    })
    

export default axiosSecure;