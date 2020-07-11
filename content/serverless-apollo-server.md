---
title: 'Serverless Apollo Server'
excerpt: 'Running Apollo Server with webpack on the Serverless Framework'
date: '2020-07-10T14:55:38.039Z'
author: 'Matt Kinnersley'
---

One of the best things about the Serverless Framework is how little amount of time you have to spend on getting your infrastructure up and running. This is made even faster when you combine it with the many plugins that are created by the community around it. This is why I wanted to see if I could deploy a GraphQL server on AWS Lambda with some of my favourite plugins that not only make your development faster, but also your Lambda cold starts.

## What are 'Cold Starts'?

When you are following the Serverless methodology, one of the sacrifices you make for the ease of use and low-cost, is performance. The reason for this is so that if no one is using your service, it won't just sit idly in the background. Now, this is great for keeping your costs down, but when the first person wants to use the service again, they will have to wait for the service to spin back up.

One of the many ways to combat this is to keep the final build size of your service down to a minimum. The smaller the bundle, the faster it spins up. This is where webpack comes in, or in our case, [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle).

## How does it work?

The `serverless-bundle` plugin is actually an extension to the serverless-webpack plugin that does the same thing, just without lots of additional configuartion. In fact, you can use this plugin with no configuration at all which is why I love it for getting started quickly. Out of the box you get tree-shaking to reduce your bundle size, ES7 `import` / `export` syntax and many more.

## What about Apollo Server?

Once again, all the heavy lifting is done for us. Apollo provides a great library for turning your GraphQL server into an AWS Lambda function. It is as simple as switching your `ApolloServer` and `gql` imports from `apollo-server` to `apollo-server-lambda`.

```js
import { ApolloServer, gql } from 'apollo-server-lambda';
```

Once that is done, all you have to do then is export the `createHandler` method from your server and you're done! All of this can be done with the `import` / `export` syntax when we combine it with `serverless-bundle` plugin.

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    endpoint: '/dev/graphql',
  },
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
```

## Serverless Framework

When using the Serverless Framework, you are following the IaC (Infrastructure as code) approach. This can be done with one file, `serverless.yml`. In here you can define what resources you want to use, whether that's a DynamoDB table for a NoSQL store, an S3 Bucket for simple object storage or maybe Cognito for handling your authorisation. You can also define how you want API Gateway to route traffic to your Lambda function. What we want for our GraphQL server is to route the traffic to one endpoint - `/graphql`.

In our `serverless.yml` file we want to add in this code snippet:

```yml
functions:
  graphql:
    handler: src/graphql.graphqlHandler
    events:
      - http:
          path: graphql
          method: post
          cors: true
      - http:
          path: graphql
          method: get
          cors: true
```

Where `src/graphql` is our entry file and `graphqlHandler` is our exported function.

## Still feel like this could be made quicker?

No worries, I have created a [Serverless Apollo Server Starter](hhttps://github.com/kinnersleym/serverless-apollo-server-starter) repository that includes all I have talked about. Now all you have to do is run a few commands and you can have a deployed GraphQL Server in seconds!

Just follow these simple steps:

Create a serverless project

```bash
$ serverless install --url https://github.com/kinnersleym/serverless-apollo-server-starter --name your-project-name
```

```bash
$ cd your-project-name
```

Install the Node.js packages

```bash
$ npm install
```

Deploy your project

```bash
$ serverless deploy
```

It's that simple.
