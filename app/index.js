const env = require("dotenv").config({ debug: process.env.DEBUG }).parsed;
const compression = require("compression");
const express = require("express");
const logger = require("./config/morgan");
const hbs = require("express-handlebars");
const app = express();
const routes = require("./config/routes");


var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

//------------ GENERAL CONFIG START ------------

// enable static files like img, css, js
app.use(`/`, express.static(env.STATIC_FILE_PATH));


// add template engine express-handlebars
app.engine(`.${env.TEMPLATE_ENGINE}`, hbs({ extname: `.${env.TEMPLATE_ENGINE}` }));
app.set("view engine", `.${env.TEMPLATE_ENGINE}`);

//------------ GENERAL CONFIG END ------------

// only in production
if(!env.DEBUG){
  app.enable("view cache");
  app.use(compression());
  app.use(logger);
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
        type Query {
            hello: String
        }
    `),
    rootValue: { hello: () => "Hello world!" },
    graphiql: true,
  })
);


app.get(routes.home.path, function (req, res) {
  return res.render(routes.home.view);
});

app.listen(env.DEFAULT_PORT, () => console.log('Node server is running..'));