'use strict';
const { getFollower } = require('../src/instagram');
const axios = require('axios');
jest.mock('axios');

test('this test should fetch followers count', () => {
    const followers = 100;
    const expectedResult = {
        number: followers
    };
    const mockedData = {
        data: {
            followers_count: followers
        }
    };

    axios.get = jest.fn().mockResolvedValue(mockedData);

    return getFollower(1, 2, 3)
        .then((result) => {
            expect(result).toEqual(expectedResult);
        });
});

test('this test should return an error object', () => {
    const expectedResult = {
        error: {
            code: 'followers_count key undefined'
        }
    };
    const mockedData = {
        wrogKey: {
            followers_count: 100
        }
    };

    axios.get = jest.fn().mockResolvedValue(mockedData);

    return getFollower("", "", "")
        .then((result) => {
            expect(result).toEqual(expectedResult);
        });
});
