Here's just a very naive implementation of routing to an express and react frontend using express.

Before building, make sure you run `npm i` in `client/react-frontend/`, `client/angular-frontend/`, and `server/`.

You need to build both frontends first. React can be built with `npm run build`, but angular requires the [angular cli](https://angular.dev/tools/cli), which you then build with `ng build --base-href=/angular/`.

Then you can run the express router with npm start and add "/react/" or "/angular/" to the end of the url to see the different frontend pages get displayed.
