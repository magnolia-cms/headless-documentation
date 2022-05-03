# READ BEFORE COMMITTING

> This repo is deprecated.

From **3rd May, 2022**, the headless documentation is now managed directly by the Documentation team. If you want to contribute to the headless docs, head on down to the new repository.

https://git.magnolia-cms.com/projects/DOCUMENTATION/repos/headless-docs/browse

## Technical Details

Uses [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

Uses [Redoc](https://github.com/Redocly/redoc) for the 'API Explorer'.

Deployed on Netlify.

## Working with Docusaurus2

### Installation
```
$ npm install
```

#### Local Development
```
$ npm run start
```
This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

#### Build
```
$ npm run build
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Working with Redoc

Redoc generates the 'API Explorer' based on an OpenAPI specification.

The `/src/pages/api-explorer.js` page has an IFRAME which loads `/static/redoc-static.html`. (IFRAME was chosen because using the redoc React component resulted in borked styling. Ideally, the Redoc build would happen as a part of the docs build, but not the case now.)

The OpenAPI spec used is in `/static/openapi-delivery-api.yaml/`.

For development / AKA working on the OpenAPI spec, From the command line, in the `static` directory, run:
```
redoc-cli serve openapi-delivery-api.yaml --watch --port 8088 --options.theme.colors.primary.main=#599900
```

To build the `redoc-static.html` file which is used in the docs, run:
```
redoc-cli bundle openapi-delivery-api.yaml --options.theme.colors.primary.main=#599900
```

## Notes

Source code for JS Libraries: https://git.magnolia-cms.com/scm/modules/frontend-helpers.git




