# Simplified Bug Demonstration

## Background

NestJS' Swagger UI is picking up the `@Header` field of the controller and showing it as a required parameter but does not actually send it as a header. Using the `Authorize` button at the top correctly sends the bearer token, which also makes the parameter redundant (in addition to being wrong since this is a header, not a GET parameter).

![Screenshot 2025-01-17 at 10.32.14 AM.png](Screenshot%202025-01-17%20at%2010.32.14%E2%80%AFAM.png)

# Steps to reproduce
1. Download the repo
2. `npm i`
3. nest start
4. Go to http:localhost:8080/v1/api
