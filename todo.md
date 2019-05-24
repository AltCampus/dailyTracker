Daily Update system
=====

- Student should be able to login (Authentication) - done
- Student should be able to add tweet and reflection (dailyUpdate) everyday (CR) 
- Student should be able to view all previous day dailyUpdate.

Extra
=======
- Student should be able to see a commit streak.
- Admin should be able to see all the students in one place and their daily updates.


- API
- Frontend in react.


Models
======

## User
- name
- email
- githubUsername
- githubId
- photoURL
- twitterUsername
- isAdmin
- timestamps

## dailyUpdate
- tweetURL
- reflection
- user
- timestamps


EXtra Models
====

## batch 
- name

## Github Authentication
- /auth/github
- /auth/github/callback

## Frontend
- react, redux