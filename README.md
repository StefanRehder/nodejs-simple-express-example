# Simple RESTful Web Service implemented with node.js and Express

This is a simple RESTful Web Service implemented with node.js and Express.
The example web service exposes a number of operations that can be used to handle hero objects stored in memory.
The web service is self hosted and can run on any Windows, Linux or macOS computer (even a raspberry pi).

## Requirements

- [Node.js 6+](https://nodejs.org/en/)

## Getting Started
`npm install`
`npm run startup`

When the web service is running, you can play around with the running web service with curl or Postman.
e.g. `curl -X PUT http://localhost:8210/hero -H 'content-type: application/json' -v -d '{ "Name": "Robin",  "Strength": 1 }'`