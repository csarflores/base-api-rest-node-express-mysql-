Node.js Express MySQL API Starter
This repository serves as a starting point for developing a REST API project using Node.js, Express, and MySQL. It provides a basic structure and essential configuration to streamline the development process and enable a quick start.

Key Features
Node.js and Express: Robust platform and framework for building web applications and APIs efficiently.
MySQL: Relational database management system providing robust data persistence.
Organized Structure: Clear code organization for easy readability and maintenance of the project.
Route Handling: Initial configuration of routes for basic CRUD operations.
Environment Configuration: Use of environment variables to easily configure the application in different environments (development, production, testing, etc.).
Prerequisites
Node.js installed on your machine.
MySQL installed and configured with the corresponding database.
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/csarflores/base-api-rest-node-express-mysql-.git
Install dependencies:

bash
Copy code
cd api-rest-nodejs-express-mysql
npm install
Configure environment variables by creating a .env file based on the .env.example file.

Start the application:

bash
Copy code
npm start
The application will be available at http://localhost:4000.

Project Structure
/src: Contains the application source code.
/controllers: Application controllers.
/database: Data models for interacting with the database.
/routes: Definition of API routes.
/config: Database configuration and other settings.

License
This project is under the MIT License. See the LICENSE file for more details.