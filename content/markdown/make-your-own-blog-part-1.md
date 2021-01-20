---
title: "Make Your Own Blog - Part 1"
subtitle: "Making a Blog with NextJS, Mailchimp and Google Analytics"
excerpt: "Starting a blog is a great way to get your thoughts down on paper and out into the world. It helps to consolidate ideas, document your learning and then share it all with others."
date: "2021-01-20T10:10:01.152Z"
author: "Matt Kinnersley"
---

Starting a blog is a great way to get your thoughts down on paper and out into the world. It helps to consolidate ideas, document learning and gives you the ability to share it all with others. You can begin easily with a website builder like Squarespace or Wix, but for me it's been much more rewarding building it myself from scratch. It's more flexible and every pixel can be customised to your liking. If you've ever been frustrated with drag and drop, building blocks, preset wrangling style of designing that never quite lives up to your ideal vision, then having a go at coding it yourself might be your best bet. It could also save you some money too.

In this first part, I am going to go over what tools I used and why I picked them. In part 2, I will go into the implementation details. Now, let's take a look at the first tool we are going to use.

## NextJS

NextJS is a framework that focuses on performance and search engine optimisation (SEO). Making a React app with Create React App (CRA) is great for getting you started quickly with client-side rendering (CSR), but one of the major pitfalls of CSR is SEO (lots of acronyms, I know, there's more to come).

When you run a React app, HTML is injected into the DOM after the initial page load. This is great for a single-page app (SPA) as our content is dynamic and requires no further page loads. This is, however, a nightmare on our SEO. If you take a look at the source code of the page, you'll see an empty container waiting for JavaScript to push our desired content into it. This is exactly what one of Google's bots will see when it loads the page, making it unfit for indexing. Since we might like people to actually read our blog at some point, it would be a useful if they could find it in a search engine results page (SERP).

So how does NextJS help us with this? Firstly, it gives us automatic static site generation and server-side rendering (SSR) out the box. Having our HTML pre-rendered with static site generation allows us to have all our content ready and available for bots to index on initial render, as oppose to an empty container with client-side rendering.

Another big contributor to SEO is site performance. If you wanted to compare the page rankings of two websites, assuming all other factors being equal, there are key performance metrics that will decide which page gets ranked above another. If your site only needs to load some HTML and CSS, it will load much faster than a site that needs to load a whole bunch of render-blocking JavaScript. NextJS static generation will prerender your pages automatically and give you a bundle that you can stick on any CDN for a blazingly fast site. If you need data that can't be fetched at build time, you can use SSR to fetch this data on the server so it isn't being fetched on the client after initial page load.

## TailwindCSS

Tailwind provides a number of CSS classes that correspond to specific utilities, for example `mb` to add `margin-bottom`. The difference between Once you have used Tailwind a few times, it becomes very efficient for designing your app. If this is your first time using it, I have found it actually takes some time getting used to. My recommendation is you install the Tailwind CSS IntelliSense VSCode extension and keep the docs open in a tab during development.

## Mailchimp

Being able to notify readers whenever you upload a new post is a great way to keep people engaged in your content. Mailchimp is a service that allows you to have users sign up to an audience and then receive emails from your campaigns. They have some very helpful templates that make it easy to automatically send confirmation emails when a user joins your email list too.

## Vercel

The company that created NextJS is Vercel. They also provide hosting of React apps and more specifically, have great support for NextJS apps naturally. Using Vercel as the hosting provider for the blog was a no-brainer. Deploying your NextJS app to Vercel is incredibly easy, especially when you are using serverless functions in your app like we are with our mailchimp API route. They also provide Preview Deployments meaning when you push a branch other than master to GitHub, it will deploy a test version of your app to a temporary location to preview your changes. This feature is perfect for when you want to publish a new post to your blog but want to preview it before it goes live.

## Google Analytics

If your blog starts gaining some attention, it can be extremely helpful to track which posts are (and are not) popular with your readers. Google provides a free service for this in the form of Google Analytics. Recently, Google released Google Analytics 4, which is what I use on this blog. I will show you how you can integrate this with your NextJS application and how to send events when users interact with your blog.
