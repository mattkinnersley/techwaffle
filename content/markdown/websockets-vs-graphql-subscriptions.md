---
title: "WebSockets vs GraphQL Subscriptions"
subtitle: "What's the difference between these real-time data technologies?"
excerpt: "At the moment, if you wanted to create an application that has some kind of real-time functionality like an instant chat, multiplayer game or social media, the way you would go about it would probably be with either WebSockets or GraphQL Subscriptions."
date: "2020-06-13T10:01:52.695Z"
author: "Matt Kinnersley"
---

At the moment, if you wanted to create an application that has some kind of real-time functionality like an instant chat, multiplayer game or social media, the way you would go about it would probably be with either WebSockets or GraphQL Subscriptions.

## What are WebSockets?

WebSockets are a protocol that allows for bi-directional communication. This means your API not only receives and responds to requests, but also updates a client when data changes in real-time.

## What are GraphQL Subscriptions?

GraphQL Subscriptions are a way of combining the WebSocket protocol with your GraphQL schemas, giving you the same real-time functionality as WebSockets. They are implemented similar to how you would implement a query or a mutation.

## How are they similar?

Both WebSockets and GraphQL Subscriptions are implementations of a Pub/Sub system and the latter is actually built on top of the WebSocket protocol. This means that to get access to the latest data, you don't have to poll your API. Once you are subscribed to your stream, you will get the latest information when it is available, with no extra request. This feature is what makes both of these technologies fit for real-time apps that need the latest information as soon as it is published.

## Where do they differ?

Both of these technologies will serve its purpose for real-time, however there are some key differences. The most obvious is of course GraphQL Subscriptions are built for GraphQL APIs. WebSockets are typically used with other REST APIs.

The most common library for WebSockets is socket.io. Do a quick google search and you will get an endless list of tutorials on how to make a chat app with socket.io.

If you want to go serverless, AWS has recently announced suppport for WebSockets over API Gateway, giving the edge to WebSockets over GraphQL Subscriptions. This allows you to run your WebSocket API on Lambda Functions and let AWS handle the scaling of your application for you. There are libraries out there that act as a wrapper to get Subscriptions to work on Lambda but they are early stages and not fit for production.

If you are not going to using serverless technologies then this won't be a concern for you.

AWS does also offer another product called AppSync, a managed GraphQL service with support for subscriptions, however you will sacrifice some of the control you get when doing it yourself.

## So what do I choose?

Both are great options, however if you already use GraphQL for other services and aren't going serverless, choose GraphQL Subscriptions. On the other hand, if you have gone down the serverless route, WebSockets have got the support from AWS.
