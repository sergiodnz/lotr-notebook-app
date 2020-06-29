# LOTR Notebook App
React application made for teaching purposes. A notebook about J. R. R. Tolkien's "The Lord of The Rings".

The was built iteractivetly, adding more requiriments and making use of new libraries on each iteration (see project's branches).

## Main topics teached

The main subjects approached while building the app:

- Create first components :white_check_mark:
  - Simple folder structure :white_check_mark:
  - Converting plain HTML code to React Components :white_check_mark:
  - API integration and data fetching :white_check_mark:
  - State management :white_check_mark:
  - Add filtering :white_check_mark:
  - Add sorting :white_check_mark:
- React Router :white_check_mark:
- Architecture Refactoring :white_check_mark:
- Changing data (UI + Server)
- Redux
  - Actions, Reducers & Store
  - Async Actions (thunk)
- Material UI
  - UI libs overview
  - UI/UX improvements

## Instalation

To install all module dependencies, run:
```sh
yarn install
```

To run the application server:
```sh
yarn start
```

NPM could be used instead, but YARN is recommended. Server  starts listening on PORT `3000`, if avaliable.

## Backend Server

This app connects to a backend server, that could be found [here](https://github.com/romerorocha/lotr-notebook-server).

### Authentication

An authorization header is required for all the requests and it should follow the format:
```
Authorization: Bearer <YOUR_API_KEY>
```

Get a key [here](https://the-one-api.herokuapp.com/sign-up). Otherwise, **YOU SHALL NOT PASS!**

## Credits

The backend server connects to another great LOTR API, to fetch external data sometimes. See [https://the-one-api.herokuapp.com](https://the-one-api.herokuapp.com/).
