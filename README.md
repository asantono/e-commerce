# AuthReactMongo

AuthReactMongo is an open source MERN stack template with built in authentication

  - Signup
  - Login
  - Logout
  - Built in Login/Signup form
  - Json Web Token
  - Secure Routes by user clearance
  - Secure Routes for logged in users
  - Redux Thunk Integration

### Installation

Quick-Start Video Guide: https://www.youtube.com/watch?v=7KQTiQAwYSU

Clone or download the repository

In the .env file of the main folder:
  - Create a Mongodb database cluster at https://www.mongodb.com/
  - Retrieve your connection string from the "connect" button in your clusters home page
  - After clicking connect find "Connect your application"
  - Copy your connection string
  - Replace the text after "DATABASE:" with your Mongodb database connection string.
  - Change the JWT_SECRET *this is used to encode the JSON Web Token

AuthReactMongo has two nodemodules folders to populate
In the project directory:
```sh
$ yarn
$ cd client yarn
$ cd ..
$ yarn
$ yarn run dev
```

### .env

  - PORT = The port number of your server
  - DATABASE = Your Mongo database string
  - JWT_SECRET = The long string you use to encode your Json Web Token 
  - JWT_EXPIRES = Length of time the JWT is good for ex: 14d = 14 days
  - JWT_EXPIRATION_NUM = Length of time the JWT is good for in milliseconds ex: 14*24*60*60*1000 = 14 days
  - NODE_ENV = 'dev' for development || 'production' for production
 
### authController.secure

Purpose: Secure routes from users who are not logged in. 

Usage: Place on or before routes that are only available to logged in users

App Example: In use before of the secret route in routes -> authRoutes

### authController.clearanceLevel

Purpose: Secure routes from users who do not hold the proper 'Clearance' credentials in their user schema. 

Usage: Define the clearance levels needed to retrieve the content in the function arguments. ex authController.clearanceLevel('level 1', 'level 2')

App Example: In use before of the secret route in routes -> authRoutes

### authController.blacklist

Purpose: Create a list of keywords that are rejected from req.body

Usage: Remove keywords from req.body. ex: authController.blacklist('clearanceLevel', 'version')

App Example: In use before of the secret route in routes -> authRoutes


### Tech

AuthReactMongo uses the following tech stack:

  - Mongodb
  - Express
  - React
  - Nodejs
  - Mongoose
  - Redux

### Development

Want to contribute? Great!

### Todos

 - Security settings
 - New features

License
----

MIT
