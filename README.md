# Setup

```
yarn add --dev @storybook/addon-storyshots @knappi/addon-storyshots-selenium react-test-renderer
```

## Docker-Selenium

* Use the docker-compose file in this repo to start `knappmeier/selenium-with-tunnel`.
* Run `yarn add --dev child-service chisel-tunnel`
* Use the file [src/test-utils/selenium-reverse-tunnel.ts](src/test-utils/selenium-reverse-tunnel.ts)
  to start and stop a reverse tunnel from the selenium-server to the current host.

## Browserstack

## Local Server

`@storybook/addon-storyshots` depends on storybook running in a webserver. Either you start the dev-server
locally, or you use the following setup:
 
* `yarn add --dev serve-handler serve @types/serve-handler`
* Use the file [src/test-utils/storybook-static-server.ts](src/test-utils/storybook-server.ts)
  to start and stop the server in `beforeAll`/`afterAll`
* run `yarn storybook-static` prior to executing the tests
* use `yarn build-storybook --watch` instead of `yarn storybook` to make sure that assets are always up to date

# Testing static storybook manually

In order to access the statically built storybook with a browsers,
you can use `serve`. Add a file `serve.json` to the `public` directory, containing:

```json
{
  "cleanUrls": false
}
```  

This makes sure that "index.html" or "iframe.html" does not get redirected to "iframe".
The run 

```bash
yarn build-storybook # (again)
yarn serve storybook-static
```
