Here's just a very naive implementation of routing to an express and react frontend using express.

Before building, make sure you run `npm i` in `client/react-frontend/`, `client/angular-frontend/`, and `server/`.

You need to build both frontends first. React can be built with `npm run build`, but angular requires the [angular cli](https://angular.dev/tools/cli), which you then build with `ng build --base-href=/angular/`.

Then you can run the express router with npm start and add "/react/" or "/angular/" to the end of the url to see the different frontend pages get displayed.

## Running Tests
I haven't set a script for running tests yet. You can run them manually as follows:

`npx playwright test`

If the tests succeed, you can show the report with

`npx playwright show-report`

You can see how the tests are performed on the browser using

`npx playwright test --headed`

Alternatively, use the provided ui mode

`npx playwright test --ui`

You can target specific browsers using

`npx playwright test --project <chromium|webkit|firefox>`

You can test more than one by using

`npx playwright test --project chromium --project webkit`

If you just want to run the previously failed test

`npx playwright test --last-failed`
