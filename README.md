# Automated Test Framework using Playwight

Tests Suite for web app lives here - `/Playwright-Framework/tests/**.spec.ts`

**CONCEPTS INCLUDED IN FRAMEWORK**

- `SET UP`
    - Node JS
    - Project Set up
    - Playwright config

- `TESTS`
    - Write Test scenarios
    - Debugging
      - Debug Console
      - Trace Viewer
      - Playwirght Inspector
      - Recording Scripts
    - Randomise Test Data
        - Using faker-js
    - Multi-parameterisation
        - Run same test n times with n different test data
      
- `PAGE OBJECT MODEL`
    - Pages
    - Components
      
- `FIXTURES/ HOOKS`
    - Before Hook
    - After Hook
  
- `AUTHENTICATION`
    - Global Signed in State
    - Multi Signed In Role
    - Non-signed In tests
      
- `PARALLEL TESTS`
    - Sequential and Parallel tests
    - Control number of workers the tests run on
  
- `CROSS BROWSER TESTS`
    - Desktop Browsers
    - Mobile browsers
  
 - `REPORTING`
    - Inbuilt (List, HTML, etc)
    - 3rd Party (Allure)

- `INTEGRATE TO CI`
    - Git Hub/ Actions



**3rd Party Tools used optimise the framework**

- `Playwright Runner`           ==> VS Code plugin - Run Tests quickly from code editor 
- `Playwirght Test Snippets`    ==> VS Code plugin - Handy PW-snipps   
- `ESLint`                      ==> Eslint Plugins specific to Playwright and TS 
- `FakerJS`                     ==> Randomising input data
- `Allure Reports`              ==> Customisable 3rd party reporting integrated with CI
