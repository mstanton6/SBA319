# My Application Name and description
 This is a MongoDB Database Application. It supports 4 routes (bands, movies, shows and seed). It follows the CRUD model for create, read, update, and delete. The seed route seeds bands, movies, and TV shows all at the same time. The seed also creates index's for all three routes.


HOW TO START
============
You start the server by "npm run dev"

See the prerequisites below.


# Example usage
1. This is how to read (get) from all 3 routes

localhost:3001/bands
localhost:3001/movies
localhost:3001/shows


Special functions (only avaliable in certain routes)
-------------
Route               Access by                   method      Outcome
=====               =========                   ======      =======
bandRoute           localhost:3001/bands        POST        Add a new band

movieRoutes         localhost:3001/movies/:id   PATCH       Update a movie

showRoutes         localhost:3001/shows/:id    DELETE      Delete a show

# Technologies Used:

Node.js                 – Runs JavaScript on the server.

Express.js              – Handles routes and HTTP requests.

MongoDB                 – Stores data in a document-based database.

JavaScript              – The language that was used to build this SBA.

REST API                – Uses standard HTTP methods (GET, POST, PATCH, DELETE)

# link to my gitGitHub account: https://github.com/mstanton6/SBA319.git


# Getting Started on setting on the project

# Prerequisites

   1. node.js
   2. MongoDB Atlas connection – The database is already hosted in the cloud. Use the connection string in the .env file.

# Installation and Usage

To use this project locally:

1.  **Clone the repository:**

    git clone https://github.com/mstanton6/SBA318.git
    
2.  **Navigate to the project directory:**

    cd SBA319
    
3.  Run "npm run dev"

4.  Open a browser or Postman and go to localhost:3001

# Contributions
- Thank you to the following for making contributions to my project       
1. https://www.w3schools.com/

2. https://www.google.com/

3. https://stackoverflow.com/
