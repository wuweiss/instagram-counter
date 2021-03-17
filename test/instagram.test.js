'use strict';
const { getFollower } = require('../src/instagram');
const axios = require('axios');
jest.mock('axios');

test('this test should fetch followers count', () => {
    const unusedParam = '';
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

    return getFollower(unusedParam, unusedParam, unusedParam)
        .then((result) => {
            expect(result).toEqual(expectedResult);
        });
});

test('this test should return an error object', () => {
    const unusedParam = '';
    const expectedResult = new Error('followers_count key undefined')
    const mockedData = new Error({
        wrongKey: {
            followers_count: 100
        }
    });

    axios.get = jest.fn().mockResolvedValue(mockedData);

    return getFollower(unusedParam, unusedParam, unusedParam)
        .then((result) => {
            console.dir(result);
            expect(result).toEqual(expectedResult);
        });
});
