# Poll APP
App for friends !!!

# Poll app

Every user can login and register

Only users that are login can create groupes

After creating groupe user gets shared link for invite

When user clicks invite link he is redirected to register with query param grope_id

When invited user login he can see the groupe that he was invited and groupe-owners
and can see their groupes 

Every groupe owner can delete groupe and all created polls for that groupe.

Every groupe member can create poll in the groupe but need groupe owner approve.

Every poll containes 
	Simple question and several options to pick, and end-date
	default option is no answered but it will be visible only after end-date.

Every user of the groupe will be notified that new poll is created and he need to answer.

Every groupe containe users only groupe-owner can remove users from the groupe

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
