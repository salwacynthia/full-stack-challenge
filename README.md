<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dr._Oetker-Logo.svg/1280px-Dr._Oetker-Logo.svg.png" width="200" alt="Dr. Oetker Logo" />
</p>
<p align="center">The completely crazy, humorous and technologically broad coding challenge for full-stack developers.</p>
<p align="center">
<b align="center">This project does not reflect our backend architecture.</b>

## Description

Hello dear applicant, this repository will keep you busy for the next few hours and will offer you tasks at different difficulty levels. We hope you have fun solving the tasks and are looking forward to your solutions. You can search for all challenges in the code to find the place to implement ( or start to ). In the repository there is an API with two interfaces, one is for creating users and the other is for loading users. The goal is to get the API running while taking the tasks into account. To achieve the task you can also rewrite or adapt parts of the application.

Ps.: Please read through the tasks first and solve them in the order that makes sense to you.

## Background

At Oetker Digital, we work in interdisciplinary teams, and as a full-stack developer, you already combine at least two disciplines: Frontend and Backend Development. For this reason, the project was implemented by frontend and backend developers and everyone was allowed to choose technologies they like to work with.

## Challenges

### Challenge: Epic Unit-Test

**Description**

For asynchronous operations, we use epics. We have prepared an Epic for you and it is just waiting to be tested by you. Remember, this is a unit test.

### Challenge: Access Control

**Description**

To protect our application from unauthorized access, we need to implement an access control layer. We got an API_KEY from our security experts and put it in the .env.example. Check if this token is correct in the header X-API-Key on every access.

### Challenge: Input Validation   baki

**Description**

We forgot to validate our inputs. Can you help us and implement the validation for creating and finding users?

### Challenge: UseCase

**Description**

Normally we map our business logic into UseCases, but for some reason we forgot to do this. Can you jump in for a second?

### Challenge: Pagination

**Description**

Our frontend developer has chosen Redux. Can you implement the pagination for the users from the store?

Ps.: You have to find a way to access the store at first.

### Challenge: Filter

**Description**

To restrict the users that are returned, we also need a filter parameter for the name. It's your turn.

### Challenge: Slice

**Description**

The only way to change the store is to do it via the reducer. The code got lost in the last merge conflict, can you restore the code to persist the user in our user store? It may be useful to take a look at the Epic.

### Challenge: Dependency Injection

**Description**

Dependency injection is reflected differently in object-oriented programming than in functional programming. Can you show us the difference in the code?

### Challenge: E2E Testing

**Description**

Our product owner has complained again that the staging environment is down. Let's quickly write some E2E tests to be on the safe side.

Ps.: Jeff Bezos doesn't want to get any more mails when we run tests.

### Challenge: (Optional) Frontend

**Description**

If your coffee hasn't gone cold by this point, you can still conjure up a little frontend for us to display the users.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Once you are done ...

... please push your solution to a PRIVATE repository on Github and invite the following people:

t-kunzemann (Tom Kunzemann)
Shekey (Ajdin Šahinbegović)
chilldow (Friedemann Ehrke)

We are looking forward to your solution and if you have any questions, please don't hesitate to reach out to us.
