import {validURL} from '../client/js/urlChecker'


describe('Test, the function "validURL()" should exist' , () => {
    test('It should return true', async () => {
        expect(validURL).toBeDefined();
    });
});
describe('Test, the function "validURL()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validURL).toBe("function");
    });
});

describe('Test, the function "validURL()" for valid url' , () => {
    var url = "https://www.skillsyouneed.com/ips/dealing-with-criticism.html";
    test('It should return true', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Test "validURL()" for invalid url' , () => {
    // I replaced 'https' with 'htpshttps' to make it invalid
    var url = "htpshttps://www.skillsyouneed.com/ips/dealing-with-criticism.html";
    test('It should return false', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});





