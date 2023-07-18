# Knowledge check-in assigment

Hi, this assignment is meant to assess your understand of building a server with
express.js with different methods and use cases to accommodate different
scenarios.

You have the starter project folder and inside of it you will find the
following:

1. The `data` folder: The data folder is meant to replace the need for a
   database atm. We have 1 file inside the `data` folder:
  - users.js: a JavaScript file which has 100 users. 
2. The `routers` folder: The `routers` folder has all the handlers to be invoked
   by your server in response to requests. There are 2 files inside the
   `routers` folder:
    - `user.js`: a JavaScript file which houses 2 functions:
      1. `getAllUsers`: this function accepts an argument called `params`.
         `params` is an array of param objects. A param object looks like this
         `{name: string, value: string | number}`.
      2. `getUserById`: this function accepts an argument called `id`. `id` is a
         string.
      3. `deleteUserById`: this function accepts an argument called `id`. `id`
         is a string.

## TASKS to be accomplished:

- Build an express.js USER api that accepts params and filters data based on
  them. e.g if param's name is "age" and value "50", the api needs to return all
  objects which have an age of 50. The api needs to be able to combine different
  params and return results accordingly: e.g if the api recieves param1 of "age"
  and value "50", and param2 of "gender" and value "male", it should return all
  objects of users who are 50 and are male. 

  The api should return {statusCode: 200, message: "No data has been found"} if
  no results from params have been found.

  Params input is limited to these properties name, age, gender.

  The api should return {statusCode: 400, message: "bad request"} if any params
  are not either: name, age, gender.


- Build an express.js api that accepts an "id" and returns one user object which
  has the id. 
- Build an express.js api which accepts an "id" and deletes one user object
  which has the id, and finally returns {id: "userId", message: "User deleted
  successfully"}
   