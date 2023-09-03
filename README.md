# Playwright

Tests Directory - 
`/Playwright-Framework/tests/**.spec.ts`

Additional things used optimise the framework -

- `ESLint`             ==>   Used Eslint Plugins specific to Playwright and TS 
- `FakerJS`            ==>   Randomising input data
- `Multi-Parameterise` ==>   Test, taking one parameter max, runs in parallel with multiple input test data.


`Items covered as part of this framework`

- Playwight Set up
    - Node JS
    - Project Set up
    - Playwright config

- Tests
    - Write Test scenarios
    - Debugging
      - Debug Console
      - Trace Viewer
      - Playwirght Inspector
      - Recording Scripts
      
- Page Object Model
    - Component
      
- Before and After Hooks
  
- Authentication Tests
    - Global Signed in State
    - Multi Signed In Role
    - Non-signed In tests
      
- Parallel Testing
    - Sequential and Parallel tests
    - Control number of workers the tests run on
  
- Cross browser Testing
    - Desktop Browsers
    - Mobile browsers
  
- Reporting
    - Inbuilt (List, HTML, etc)
    - 3rd Party (Allure)

- Integrate Framework with CI
    - Git Hub Actions
