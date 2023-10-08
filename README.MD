# Online Betting Dashboard Demo Project

![Online Betting Dashboard Demo](https://github.com/theluxaz/todo)


## About The Project

This project was created as  a task to demonstrate fronted and backend skills. It was created in 2 days, with most of the frontend developed on day 1. The backend and frontend cleanup were finished up on day 2.

Frontend:
* React 
* Typescript
* Mobile Functionality
* API Handling
* UI Creation
* Unit Test Coverage

Backend:
* NodeJS 
* Typescript
* Express
* PostgreSQL
* API Handling
* Database Seeding

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

The following must be installed to run this project locally on your machine.
* Node.js
* Npm (or Yarn)
* PostgreSQL (Add to Path)

### Installation

The following describes how to install the required tools to run this project. Both the frontend and backend need to be installed and run for the project to work properly.

1. Clone the repo
   ```sh
   git clone https://github.com/theluxaz/task.git
   ```
#### Frontend
2. Install NPM packages within the frontend folder
   ```sh
   npm install
   ```
#### Backend
3. Install NPM packages within the backend folder
   ```sh
   npm install
   ```
4. Set up a database
   ```sh
   npm run create-db
   ```
5. Rename .env.example to .env and replace the USER and PASSWORD values with your own local PostgreSQL values. 
   ```sh
   POSTGRES_USER='postgres'
   POSTGRES_PASSWORD='password'
   ```


## Usage

To run the project locally, please run the backend first, then the fontend:

#### Backend

Compile typescript files after changes:
   ```sh
   npm run build
   ```

Re-seed the database and start the Backend:
   ```sh
   npm start
   ```

#### Frontend

Start the frontend:
   ```sh
   npm start
   ```

## Additional Information
There are alternative database tables and query functions for more generic event objects in the ./alternative folder. These allow for more flexibility and should be expanded upon if project needed to continue. The current database tables are specifically made to be simple for this demo.

## Troubleshooting

To be determined...

## Roadmap

* Add comments
* Add tests for Backend
* Add authentication
* Transition backend to use an ORM like Prisma
* Integrate other types of events in the system for betting
* Add routing and different pages

## License

Distributed under the MIT License.
