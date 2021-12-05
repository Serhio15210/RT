import axios from "axios";

export default class PostService {
    static async getAll(limitPage=10,page=1) {
        // 'http://192.168.1.163:8000/tweeter_api'
        const response=await axios.get('https://api.twitter.com/2/tweets/search/recent?query=music',{
            headers:
                {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAHHnVgEAAAAA0Xv8oqEMfvyXhRsRp5OvEe%2BY2PI%3DUidYw4k43wXd2D4N9KYTo4RgHxrBNKf70eSqbfyNa8dUoq6QYe",
                    // "Access-Control-Allow-Origin": "*" ,
                    // 'Access-Control-Allow-Methods': 'GET',
                    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                },
        });
    }


    static async getById(id){
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    }
    static async getCommentsByPostId(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    }
}