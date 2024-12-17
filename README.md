# Social-Network-API

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Description
  This server side API allows users on a social network site to do the following things:
    - Create an account as well as update it and delete it
    - Allows users to add other users to their list of friend and allows for them to be removed
    - Allows users to create, update, and delete thoughts
    - Allows users to react to thoughts as well as delete their reactions

## Usage
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
Since this Social Network API is server side only, you can view the routes being tested in insomnia in this video:

[Social Network API.webm](https://github.com/user-attachments/assets/d347f49d-c434-4cf4-8234-794103617280)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributions
  As this is only the server side API for a social network app, this project can be contributed to by creating a front end for a social media site where the routes are intergrated into user actions on the front end.

## Tests
N/A

## Contact Information
  Github Username: andrewsoper1
  Email Address: soper.andrew6@gmail.com
