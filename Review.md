# Review Questions

## What is Node.js?

Node.js is used to run JS outside of the browser. Previously JS was only used for web apps but now it can be used for things like servers, etc.

## What is Express?

Express extends the functionality of Node.js and it adds usability, kinda like React to JS

## Mention two parts of Express that you learned about this week.

middleware, routing

## What is Middleware?

Middleware is used when a client makes a request  to a server.

## What is a Resource?

a resource is anything that exists on the server. It's always accessible wit a URL

## What can the API return to help clients know if a request was successful?

APIs can return a message letting you know that the request was successful or, in the case of an error, it can give instructions to resolve it.

## How can we partition our application into sub-applications?

Express Routers!

## What is express.json() and why do we need it?
its built-in middleware. it allows us to read from `req.body`