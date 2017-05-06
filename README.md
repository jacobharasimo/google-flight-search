Google Flight Search
===============================================
Built with yarn https://yarnpkg.com/lang/en/docs/install/

## running
* `yarn` to install your dependencies
* `yarn start` to start a local dev server
* `yarn build` to build a production distrib of your app
* `yarn dev` to start a local dev server
* `yarn dist` to build a production distrib of your app and serve it with a local server


## notes
* Currently only `yarn start` is tested and working
* application uses typeahead/autocomplete for looking up airport codes via city/airport name
* You may run with npm instead of yarn if desired. No testing had been done but frameworks are reported to be interchangable. Testing has not been done but it should work with `npm install` and `npm run start`

## Improvements
* replace forms with angular-formly to provide more unified error and field control
