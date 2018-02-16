// In order for `mocha` to test this, we have to specify, `mocha './test/**/*.spec.js'

var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('Auth Controller', function () {

    // We can nest `describes`
    describe('Is Authorized', function () {
        it('Should return false if not authorized', function () {
            var expected = authController.isAuthorized(['admin', 'user'], 'guest');
            assert.equal(false, expected);
        });
        it('Should return true if authorized', function () {
            var expected = authController.isAuthorized(['admin', 'user'], 'admin');
            assert.equal(true, expected);
        });
    });

    describe('Is Authorized Async', function () {
        // Note: We are passing a parameter `done` to the callback of `it`
        // since we are using async. 
        // Default timeout of mocha is `2000 ms`
        it('Should return false if not authorized', function (done) {
            this.timeout(2500);
            authController.isAuthorizedAsync(['admin', 'user'], 'guest',
                function (isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });
        });
    });
});