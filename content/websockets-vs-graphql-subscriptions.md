---
title: 'Websockets vs GraphQL Subscriptions'
excerpt: 'The difference between these real-time technologies'
date: '2020-06-13T10:01:52.695Z'
author: 'Matt Kinnersley'
---

At the moment, if you wanted to create an application that has some kind of realtime functionality like an instant chat, multiplayer game or social media, the way you would go about it would probably be with either Websockets or GraphQL Subscriptions.

## How are they similar?

Both Websockets and GraphQL Subscriptions are implementations of a Pub/Sub system and the latter is actually built on top of the websocket protocol. This means that to get access to the latest data, you don't have to poll your API. Once you are subscribed to your stream, you will get the latest information when it is available, with no extra request. This feature is what makes both of these technologies fit for realtime apps that need the latest information as soon as it is published.

## Where do they differ?

The most obvious difference is of course GraphQL Subscriptions are built for GraphQL APIs. Websockets are typically used with other REST APIs.

The most common library for Websockets is socket.io. Do a quick google search and you will get an endless list of tutorials on how to make a chat app with socket.io.

Both of these technologies will serve its purpose for realtime, however there are some key differences.

If you want to go serverless, AWS has recently announced suppport for Websockets over API Gateway, giving the edge to Websockets over GraphQL Subscriptions. This allows you to run your Websocket API on Lambda Functions and let AWS handle the scaling of your application for you.

There are libraries out there that act as a wrapper to get Subscriptions to work on Lambda but they are early stages and not fit for production.

AWS does also offer another product called AppSync, a managed GraphQL service with support for subscriptions, however you will sacrifice some of the control you get when doing it yourself.

## So what do I choose?

Both are great options, however if you already use GraphQL for other services and aren't going serverless, go for GraphQL Subscriptions. On the other hand, if you have gone down the serverless route, Websockets have got the support from cloud providers like Amazon, for now.
