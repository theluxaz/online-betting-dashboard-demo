# Online Betting Dashboard Demo Project

![Online Betting Dashboard Demo](https://github.com/theluxaz/online-betting-dashboard-demo/blob/main/frontend/src/static/demo.png)


## About The Project

This project was created as a task to demonstrate frontend and backend skills. It was created in 2 days, with most of the frontend developed on day 1. The frontend cleanup and backend functionality were finished on day 2.

This demo shows a simple Dashboard that allows users to place bets on specific sports (Football) events and see their odds. Frontend is a single page which fetches and displays sports events from the backend API. For a better look, additional UI components with details appear after you click on an event, with a modal appearing after you place a bet. The backend sets up, seeds and connects to a PostgreSQL database. 

Express is used to serve API endpoints. The columns "event_id" (Primary Key) and "event_name" (e.g., “Soccer: Team A vs. Team B”) were renamed to "id" and "name" for more consistency. Since the dashboard page is football themed, the API endpoint is "/api/events/football" instead.

Frontend:
* React 
* Typescript
* Mobile Functionality
* API Handling
* UI Creation
* Material UI for CSS

Backend:
* NodeJS 
* Typescript
* Express
* PostgreSQL
* API Server
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
   git clone https://github.com/theluxaz/online-betting-dashboard-demo.git
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

To run the project locally, please run the backend first, then the frontend:

#### Backend

Compile typescript files after changes:
   ```sh
   npm run build
   ```

Re-seed the database and start the backend:
   ```sh
   npm start
   ```

#### Frontend

Start the frontend:
   ```sh
   npm start
   ```

## Additional Information
There are alternative database tables and query functions for more generic event objects in the ./alternative backend folder. These allow for more flexibility and should be expanded upon if project needed to continue. The current database tables are specifically made to be simple for this demo.

## Troubleshooting

If you get an error saying:
   ```sh
   psql not recognized as an internal or external command
   ```
Then you need need to set the ./bin and ./lib folders of your [PostgreSQL installation folders to the PATH](https://stackoverflow.com/questions/39602133/how-to-set-postgres-path-variable-on-windows-10) (Windows)


## Roadmap

* Add authentication
* Add comments
* Add test coverage for frontend
* Add tests for backend
* Transition backend to use an ORM like Prisma
* Integrate other types of events in the system for betting
* Add routing and different pages
* Add historical events, the backend function is available

## License

Distributed under the MIT License.
