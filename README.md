# Description
Simple Currency Exchange App with React SPA Front-end and Node.js Back-end.
There are two types of queries availabe:
- Simple Exchange conversion from currency A -> B with the "latest" exchange rates
- Timeseries conversion from currency A -> B with max 10 Datapoints from given time interval

The exchange data is provided by [openexchange]

This App use a passwordles signup mechanism. For unregistered users are 10 overall requests free. For signedup users are 30 requests free.

To Register:
1. Click on Signup on the top right Button and submit your mail.
2. Check your mails and follow the link

See it live here: [app]

Due to the lack of time is this app not production ready and absolute not bug-free. There are a lot of possible improvements. This is just an example App
In most cases this app was developed to demonstrate how to develop large scale Applications.
But there are also some smells to get things done in a short time (like in app MemDB for UserData)


# Installation
Steps to install and run this project locally.

1. Create your virtual environment (with Docker installed).
2. Check out the repo.
3. Build Docker Container.
```
> docker build -t <imageName> .
> docker run -e HOSTNAME=<hostname> -P|(-p 443:<HTTPS_PORT> -p 80:HTTP_PORT) [-e HTTPS_PORT=443] [-e HTTP_PORT=80] -name <containerName> <imageName>
```
4. Browse to <hostname>:<HTTPS_PORT|HTTP_PORT with redirect>

### Without docker
```
> npm start
```

# Front-end
- React
- Redux with state persistance
- CSS Modules

Front-end request available currencies from `/api/currencies` at startup time.
There are input fields amount, from, to required to perform a `simple query` with latest exchange rates to `/api/exchange`. A query is started with a search button click. There are two additional input fields required if advanced search button is toggled: dateFrom and dateTo. For the Input Forms aren't any validation mechanisms implemented, so all queries will proceed to the Back-end and will be rejected if parameters are missing (don't do this in production, just for demonstration).

React Components are split into Presentation-Container Components with HOC-Container. This way there is a loose coupling between presentation and logic. This allows easily exchange or enhancement (with more HOCs) of both parts.


## Back-end
- Express,
- In Memory Cache as dirty Redis replacement (don't do this for production!)
- HTTPS/HTTP2 API with restricted access
- JWT for Auth and Signup.  

Entrypoint `index.js` acts as a mediator and connects Server-Events (fired by Routes) with Service logic. The Back-end is divided into Routes, Middleware, Policies, Transformer and Services.

Routes contain API definition. There are currently three types of Routes: Web, PublicAPI, PrivateAPI.
- Web: serve `index.html` and accept signup requests.
- PublicAPI: allows to fetch currencies from `/api/currencies`.
- PrivateAPI: implements two middleware (authorization and policies) to restrict access to `/api/exchange` and `/api/time-series`.

Transformers are pure functions for simple data transformation without complex logic.

Services are mostly modules which should be outsourced as a separate service for scaling the Back-end.  


# Testing
Just three quick examples for unit-, integration-, e2e-tests (coverage <1%)
- Mocha
- Sinon
- Chai, Sinon-chai, chai-as-promised
- Mockery
- Webdriver

To test this app, use the `test` script.
```
> npm run test
```


[openexchange]: <https://http://openexchangerates.org/>
[app]: <https://104.154.143.10/>
