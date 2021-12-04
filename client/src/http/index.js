import axios from "axios";
import {config} from "react-transition-group";

const $host=axios.create({
    baseURL:process.env.REACT_APP_API_URL
})

const $authHost=axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor=config=>{
    config.headers.authorization=`Bearer ${localStorage.getItem('accessToken')}`
}

$authHost.interceptors.request.use(authInterceptor)
export{
    $host,$authHost
}