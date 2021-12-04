const axios = require("axios")
const Twitter = require('twitter')


class Api_controller {
    async twitter_api(req, res) {
        const {tag} = req.query
        const response = await axios.get('https://api.twitter.com/2/tweets/search/recent?max_results=100&media.fields=&query=' + tag,
            {
                headers: {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAHHnVgEAAAAALpaUElWFhCgLmObkYTE2%2Bubovv4%3DElqZqTBmccsR4MI9BKDp7ePhevUNwIquBdkeeyfprWDIkn8EZk"
                }
            })
        console.log(response.data)
        return res.json(response.data)
    }

    async twitter_api_1(req, res) {
        const {tag} = req.query
        const client = new Twitter({
            consumer_key: process.env.apikey,
            consumer_secret: process.env.apisecret,
            bearer_token: process.env.bearer
        });

        client.get('search/tweets', {q: tag}, function (error, tweets) {
            tweets.statuses.forEach(function (tweet) {
                console.log("tweet: " + tweet.text)
            });
            return res.json(tweets)
        });
    }
}

module.exports = new Api_controller()