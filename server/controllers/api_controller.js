const axios = require("axios")
const Twitter = require('twitter')


class Api_controller {
    async twitter_api(req, res) {
        const {tag} = req.query
        const response = await axios.get('https://api.twitter.com/2/tweets/search/recent?media.fields=&user.fields=profile_image_url,name&max_results=100&query=' + tag,
            {
                headers: {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAHHnVgEAAAAALpaUElWFhCgLmObkYTE2%2Bubovv4%3DElqZqTBmccsR4MI9BKDp7ePhevUNwIquBdkeeyfprWDIkn8EZk"
                }
            })

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
    async getHotNews(req,res){
        const {tag} = req.query
        const response = await axios.get('https://api.twitter.com/2/tweets/search/recent?query=has:media puppies&tweet.fields=attachments,created_at,entities&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width',
            {
                headers: {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAHHnVgEAAAAALpaUElWFhCgLmObkYTE2%2Bubovv4%3DElqZqTBmccsR4MI9BKDp7ePhevUNwIquBdkeeyfprWDIkn8EZk"
                }
            })
        console.log(response)
        return res.json(response)
    }
}

module.exports = new Api_controller()