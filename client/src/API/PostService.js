import axios from "axios";
import {$host} from "../http";
import {useContext} from "react";
import {AuthContext} from "../context";

export default class PostService {

    static async getAll(tag:'спорт&музыка&искусство&кино&медицина&it&игры&мода&бизнесс') {
        // 'http://192.168.1.163:8000/tweeter_api'
            const response=await $host.get(`auth/twitter_api?tag=` + tag)
        console.log(response.data)
        return response.data


    }
    // static async getAll(limit = 10, page = 1) {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //         params: {
    //             _limit: limit,
    //             _page: page
    //         }
    //     })
    //     console.log(response)
    //     return response;
    // }
    // static async getAll() {
    //     // 'http://192.168.1.163:8000/tweeter_api'
    //
    //     return await $host.get('auth/getHotNews')
    // }


}