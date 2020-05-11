A Preconfigured authentication server for education purpose

you'll need to have a local postgresql database running with the name `edu_epita` to get it running

before you run it on an empty database, use `yarn init-db` to create the neccesary tables and fields,
then run `yarn start`

hint: modify the database url in `.env` if the password, user or port does not match the ones in the default one

This server will provide you three routes:

- POST `/login`: expects a JSON body with an object containing the fields `email` and `password` (some rules might apply)
  responds with a JSON body containing either `errors` or `token`

- GET `/logout`: will end the user's session

- POST `/signup`: expects a JSON body with an object containing the fields `email` and `password` (some rules might apply)
  responds with a JSON body containing either `errors` or `token`
