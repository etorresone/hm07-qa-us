# Sprint 7 project-Elia Torres- Project hm07-qa-us

## Description

The purpose of this project is to write HTTP javascript tests for Urban Grocers on VS code.
We will be writing tests, running tests, checking and parsing the responses for HTTP requests: GET, POST, PUT, and DELETE, with two tests for each endpoint, 8 tests in total.

### Set-Up and project prequisites

Before begining any testing we need to have Vscode, Gitbash installed,in the computer, along with a Github account.

1.  Connect Github account to Triple Ten's plaform
2.  Clone repository with the name hm07-qa-us to our local computer using Gitbash
    To clone the repository... 1. open gitbash 2. create a directory to store all of your projects.

        For example:
        cd ~               # make sure you're in your home directory
        mkdir projects     # create a folder called projects
        cd projects        # change directory into the new projects folder

        # if you are using HTTPS
        git clone https://github.com/username/hm07-qa-us.git

        # if you are using SSH
        git clone git@github.com:username/hm07-qa-us.git

## Testing set-up

    1. open project hm07-qa-us in vsCode
    2. run npm install in the vsCode terminal
    3. start the tripleten server & copy the url
    4. paste the server URL into the config.js file of your vscode project
    5. open your api documentation: URL + /docs/ in a new tab in chrome
    6. start testing

## Running tests

    1. open each individual js file for GET, POST, PUT, DELETE
    2. pick an endpoint from the API documentation for the corresponding test
    3. paste your API enpoint and to the corresponding test: GET, POST, PUT, DELETE
    4. run each individual test with the corresponding test name
        a. npx jest getHandlers.test.js
        b. npx jest postHandlers.test.js
        c. npx jest putHandlers.test.js
        d. npx jest deleteHandlers.test.js
    5. Parse the response and check that the response body contains the expected data for each of the 4 tests above.

## Conclusion

If necessary write bug reports and document any issues faced when testing
