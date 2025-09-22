# brix-qa-cypress-ui-testing

---
# Overview


- This repository holds the tests for the [Pharmacy](https://healthforceio.atlassian.net/wiki/spaces/PHAR/overview?homepageId=31228110) Brix UI and uses the [Cypress](https://docs.cypress.io/guides/overview/why-cypress) test automation framework
- Helpful Cypress documentation:
  - [Command Line Guide](https://docs.cypress.io/guides/guides/command-line)
  - [Best Practice](https://docs.cypress.io/guides/references/best-practices)
- Tests can be found under `./cypress/e2e/features/`


## Getting Setup With [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

### Pre-requisites

- Git [installation](https://www.atlassian.com/git/tutorials/install-git)
  - Also, checkout our [Git & Source Control Docs](https://healthforceio.atlassian.net/wiki/spaces/PHAR/pages/44236851/Git+Source+Control)
- Node.js installation
  - [Download](https://nodejs.org/en/download) Node.js and add it to your applications

### Clone And Setup Your Project

- Clone this repository
- `cd <to root directory>`
- run `npm install`


### Mock server

It may be necessary to run tests against the fingerprint device. The `brix-qa-mock-server` bitbucket repository contains all the mock
servers for mocking websocket devices.
* Cypress does not seem to care for certificates on the mock server, this work has been completed, but left out as it's currently not required and it adds complexity.

Run the following commands to start the device mock server:

1. Run `npm run mock-server:clone` to pull the git repo
2. Run `npm run mock-server:open-branch` to navigate to the correct branch to start the server, this is likely to change across environments
3. Run `npm run mock-server:start` to start the server
4. You can now start your tests


### Executing Your First Test Case

- Open up the `package.json` and navigate to the `scripts` area
- You should see:

```
"cy:regressiontest": "npx cypress run --browser chrome -e TAGS='@regression'",

"cy:smoketest": "npx cypress run --browser chrome -e TAGS='@smoke'"
```

- By running the following command(s) you should be able to run the `@regression` and `@smoke` tests respectively:


```
npm run cy:regressiontest
npm run cy:smoketest
```

* Your final output should look similar to the below:

====================================================================================================

(Run Finished)

```
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ✔  pharmacy-area.feature                    00:08        1        1        -        -        - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✔  standard-login.feature                    88ms        7        -        -        7        - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✔  user-access.feature                      175ms       16        -        -       16        - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✔  user-enrolment.feature                   00:12       28        1        -       27        - │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
  ✔  All specs passed!                        00:21       52        2        -       50        -

```

### _Happy Testing ... Your Setup Is Complete 🙂_