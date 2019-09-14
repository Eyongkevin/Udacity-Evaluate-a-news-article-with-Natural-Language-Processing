var requestPost = require('../server/handleRequest')
var validateRequest = requestPost.validateInputRequest;
var httpMocks = require('node-mocks-http');


describe('Test, the function "validateRequest()" should exist' , () => {
    test('It should return true', async () => {
        expect(validateRequest).toBeDefined();
    });
});
describe('Test "validateRequest()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateRequest).toBe("function");
    });
});
describe('Test, the function "validateRequest()" throw error if incorrect user inputs' , () => {
    test('validateRequest should throw error if incorrect user inputs', () => {
    const next = jest.fn();
    const req = httpMocks.createRequest({ 
        body: { 
        url: "https://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/"
        }
    });
    const res = httpMocks.createResponse();
    validateRequest(req, res, next);
    // validate HTTP result
    expect(res.statusCode).toBe(400);
    expect(res._isJSON()).toBeTruthy();
    // validate message
    const json = JSON.parse(res._getData());
    expect(json.message).toBe('Invalid input');
});
})