const axios = require("axios")

class Api_controller {
    async twitter_api(req, res) {
            const response = await axios.get('https://api.twitter.com/2/tweets/search/recent?query=футболл',
                {
                    headers:{
                        "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAAHHnVgEAAAAALpaUElWFhCgLmObkYTE2%2Bubovv4%3DElqZqTBmccsR4MI9BKDp7ePhevUNwIquBdkeeyfprWDIkn8EZk"
                    }
                })
            console.log(response.data)
            res.json(response.data)
        }
    }

module.exports = new Api_controller()