Name: Korkor Mensah
Location: Accra Ghana
Role: Test Analyst

This project steps below is my interview assignment with Formedix.

##dependencies: this code requires Protractor a Node.js program. To run, you need Node.js installed.
You will also need Jasmine test framework for testing its interface.

##installation: To use this code you should use npm to install Protractor globally with:
    npm install -g protractor

This will install two command line tools, protractor and webdriver-manager.


The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

    webdriver-manager update 
and start the server with:
    webdriver-manager start

I created a folder with two files:
    1. spec.js and 
    2. conf.js

    and run the test with:
    protractor conf.js


