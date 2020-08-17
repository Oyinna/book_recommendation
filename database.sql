CREATE DATABASE book_recommendation;

--\c into book_recommendation

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email CHAR(50) NOT NULL,
    password CHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY NOT NULL,
    isn INTEGER NOT NULL,
    title TEXT NOT NULL,
    auther TEXT NOT NULL,
    genre TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE feedback(
    feedback_id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    book_id INTEGER REFERENCES books(book_id) NOT NULL,
    feedback TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL
);