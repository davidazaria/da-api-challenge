# da-api-challenge

Node/Express MVC with pagination through a Postgres database! 

Below are the steps to run this project.

1) Fork and clone this repository. 

2) From the project root (`~/da-api-challenge`)on your local machine, run `npm i` to bring in my npm packages from my `package.json` manifest to your version of the local project. 

3) We will need to create an in-memory Postgres database to render the internal API results. In the command line from the project root, connect to Postgres by entering `psql`.

4) Once connected to Postgres, insert the following command:  `CREATE DATABASE da_api_challenge;`. 

5) After exiting Postgres only after receiving feedback your new database has been provisioned, back in the project root run the following commands to migrate and seed your new database with data I have provided:

First:
`psql -f db/shows_migration.sql` --> CLI feedback should be (`DROP TABLE / CREATE TABLE / CREATE INDEX`)

Then:
`psql -f db/seed.sql` --> CLI feedback should be (`INSERT 0 6`)

6) To verify the data migrated as intended, we can check Postgres by running a few commands. Let's re-enter Postgres by typing `psql` and then `\c da_api_challenge` which should connect you to the database you provisioned. 

7) Once connected, let's run a simple `SELECT * FROM shows;` which should return six shows displaying their respective `title`, `description`, `duration_minutes`, `air_date`, `rating`, and an array of `keywords`. 

8) After confirming the data has been successfully seeded, let's exit Postgres and head back into our project root to run our project! Simply run `npm run dev`, which will start our `nodemon` package, serving up our project in `http://localhost:3000/` in our browser. 

9) From there, you should be greeted with the followin gmessage: `Welcome to the api-challenge!`. Simply click the `See all shows` link to view your internal API.

10) You can now CRUD (create, read, update, and delete) your way through your new TV show API. Success! 
