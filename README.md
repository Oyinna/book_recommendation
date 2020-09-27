## Project Overview
This project is a book recommendation service which is usable via a REST API. It accepts new users, recommends exactly 20 books to users on demand and receives user’s feedback which can either be “Liked The book”, “Disliked The book” or “Not Interested”.
Project Timelines 
## Required Features 
1.	It’s a REST API service.
1.	Sign up new users and authenticate logged in users
1.	Users should be identified by their usernames.
4.	It recommends exactly 20 books to users.
6.	Users can give feedback of either “Liked The book”, “Disliked The book” or “Not Interested” on every book recommended to them.
## Tools 
*	Framework: Node/Express 
*	Linting Library: ESLint 
*	Style Guide: Airbnb
*	Database: Postgresql
*	Testing Framework: Mocha

## Installation
* Requires Node js, Version 8 or higher and posgresql
* Then clone the repository or download and uncompress:
git clone https://github.com/Oyinna/book_recommendation.git
* Start the App by running:
    * npm install to install all the dependencies

    * npx sequelize-cli db:migrate to migrate the database tables

    * npm start to start the server
