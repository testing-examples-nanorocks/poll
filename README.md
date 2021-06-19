# Poll APP
App for friends !!!

## Tech
Powered by NodeJS, MongoDB, GraphQL

## Local testing the node app

- `npm run test` --> to run the test with mocha framework
- `npm run dev` --> to run nodemon for development
- `npm run prod` --> to run node in production

## Docker for development and production

On `local-machine/production-server` install of `NodeJs`, `Docker`, `DockerCompose`, `Git` is required

Then we need clone the repository with `git clone` command

### Important 

On the same start in the repository navigate to app folder and run:
`npm install --include=dev`

Then navigate to root of the project to Dockerfile and change:

- For `development` 
    - `CMD ["npm", "run", "dev"]`

- For `production` 
    - `CMD ["npm", "run", "prod"]`

After successful change navigate on root of the repository and run

`docker-compose -f docker/docker-compose.yml up -d --build`

OR 

`docker-compose -f docker/docker-compose.yml up --build`

To enable logging in same terminal window.

Now, you are done here.

## Useful commands

- To shutdown the setup and clean containers --> `docker-compose -f docker/docker-compose.yml down`
- To display last logs form all containers --> `docker-compose -f docker/docker-compose.yml logs`