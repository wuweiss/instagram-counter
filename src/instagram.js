'use strict';

const axios = require('axios');

async function getFollower(config) {
    const graphUri = 'https://graph.facebook.com/';
    const apiVersion = 'v9.0';
    const uri = `${graphUri}/${apiVersion}/${config.id}?fields=${config.param}&access_token=${config.token}`;

    return axios.get(uri)
        .then((result) => {
            const res = result?.data?.followers_count;

            if (!res) {
                throw new Error('followers_count key undefined');
            }
            return { number: res };

        })
        .catch((error) => error);
}

exports.getFollower = getFollower;
