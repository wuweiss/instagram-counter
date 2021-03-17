'use strict';

const axios = require('axios');

async function getFollower(config) {
    const graphUri = 'https://graph.facebook.com/';
    const apiVersion = 'v9.0';
    const uri = `${graphUri}/${apiVersion}/${config.id}?fields=${config.param}&access_token=${config.token}`;

    return axios.get(uri)
        .then((result) => {
            const res = result?.data?.followers_count;
            const myError = {
                error: { code: 'followers_count key undefined' },
            };
            return (res ? { number: res } : myError);
        })
        .catch((error) => error.response.data);
}

exports.getFollower = getFollower;
