# Testing code with Mocha, Chai

Sample code to getting started with testing JavaScript code with Mocha 

## Types of testing and dealing with Node version

**Three different types of test mainly:**
- **Unit test**: Testing basic unit of code. 
- **Integration test**: Testing by integration one piece of code with depending code unit(s). To make sure that things fit together.
- **Functional test**: Testing the whole thing E2E; Also called *Blackbox testing*; Making sure that everything fits together.

**Dealing with Node versions using NVM:**
Node has very frequent release cycles and to deal with this to test against different version of node we could make use of [nvm - Node Version Manager](https://github.com/creationix/nvm). 

Note: NVM doesn't support Windows.

## Testing with Mocha

- Mocha is a test runner (like Jasmine, Jest etc.)
- Mechanism by which tests are executed

**Installing Mocha and running basic tests:**

*Reference code: 01.FirstMochaTest*

- Create a project by using `npm init` in a folder (01.FirstMochaTest) to create the `package.json`
- Install Mocha globally using `npm install -g mocha`
- Check the version - `mocha --version`
- Install locally in the new project created - `npm install --save mocha`
- Create a folder `test`, and then create a file `index.spec.js`. Check the folder - `01.FirstMochaTest\test` for details about the test. 
- Type `mocha` and it will look for the `test` directory and run the things in it.
- Add more tests. Check the `controllers` folders to see how to go with testing a `controller`. 
- To run all tests in `test` folder, use the command `mocha './test/**/*.spec.js'`
- We can further *automate* this by moving this command to the package.json file by changing the `scripts.test` to `"test": "mocha ./test/**/*.spec.js"`; Now to run the test, do `npm test`

**Testing async, timeouts, and using hooks:**

*Reference code: 01.FirstMochaTest*

- Inorder to test async, pass in a callback to the definition like `it('Should return false if not authorized', function (done)` and call the callback function (`done()`) after assert. If we don't call the callback to the `it`, the test will run in sequence without taking care of the event loop and it will automatically succeed.  
Check `auth.controller.spec.js` for more details.
- Default timeout of mocha is *2000 ms*. To handle timeouts of more, we can change the mocha context inside the callback of `it` using `this.timeout(2500)`. If we don't change the `timeout` we will get the error: 
> Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. 
Note: If we are using arrow functions, then we cannot use the `this` context inside. If we use arrow function, `this` get bound to the lexical context instead of the call path. 
So, Mocha suggests to **not use arrow functions**
- `before` and `beforeEach` lifecycle hooks are useful to be in line with `DRY` principle. 
`before` can be used for a global setup (once) and `beforeEach` can be used for a *each test setup*  - i.e. inside a `describe` for all it's `it`s 
This is useful when we have to setup something before we run the tests. 
Note: If `beforeEach` is outside of all `describe`s, it is going to run it for all tests, no matter the test are in different files. So, make sure that your `beforeEach` is specific to the *description*. 

**F.I.R.S.T principles, pending tests (skip and only):**

*Reference code: 01.FirstMochaTest*

- **F.I.R.S.T** principle in testing is respected by Mocha; For example, `beforeEach` for *Independent / Isolated* if we use it correctly; *Self Validating* if we put in more descriptions when we write the code; `beforeEach` function can be provided more parameters which can be used to identify where the test are failing if it fails. 
- **Pending tests** can be included by providing `it('Should work when role is correct')` without any additional params and we can go back and write those when we are ready to. The *pending* test would be shown towards the summary section. Doing so, we can remove **TODO://** comments. 
- Specific test can be run using `describe.only` and `it.only` to isolate tests; this is useful to test specific tests / avoid long running tests. 
- Specific tests can be skipped using `describe.skip` and `it.skip`. The skipped tests will show up in the *pending test* section. We can also use `this.skip` inside `it` to do some environment specific test for example. 