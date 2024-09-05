# Capstone Projects Portal

The Capstone Projects Portal is a web portal that showcases projects built by students.
It is the basis of the [CMPUT 401 Projects Portal](https://cmput401.ca).

This repository contains the source code for the frontend and backend of the portal.
The frontend is a single-page application built with React.
The backend is a Django server that uses Django REST framework. It stores data in a PostgreSQL database.

## Setting up a development environment

### Dependencies

The Capstone Projects Portal server runs with the following dependencies:

- Python 3.11
- Node 20 / npm 10
- PostgreSQL 16

### Dev container

A [dev container](https://code.visualstudio.com/docs/devcontainers/containers) is provided.
If you use VS Code and have Docker installed, this can be an easier way to set up a development environment.
It includes the appropriate versions of Python and Node, as well as a PostgreSQL container.

You do not have to use a dev container for your development environment. If you aren't using a dev container,
just ensure the appropriate versions of the above dependencies are installed and properly configured with the project.

To use the dev container, open the repo in VS Code and make sure Docker and the
[Dev Containers extension](vscode:extension/ms-vscode-remote.remote-containers) is installed.
Press F1 and run the "Dev Containers: Reopen in Container" command. The terminal in VS Code will be attached
to the dev container, and a PostgreSQL container will be accessible on localhost:5432.

### Configuring the environment

[There are some environment variables that need to be set](docs/environment-variables.md)
for the backend and frontend to work. You can create `backend/.env` and `frontend/.env`
and set the needed environment variables there.

### Initial setup of development servers

1. Ensure that `backend/.env` and `frontend/.env` exist and are configured according to the
   [Configuring the environment](#configuring-the-environment) section.

2. Install all dependencies. This will install all Python and npm packages for the backend and frontend.

```
npm run install-all-dependencies
```

3. Initialize the backend database. Using the environment variables in `backend/.env`, this will
   connect to the PostgreSQL server, create the necessary database and user, and apply migrations.
   Note that if you re-run this command, existing data in the portal database will be lost.

```
npm run reset-database
```

4. Optionally, import test data into the database so the portal has some content.

```
npm run import-dummy-data
```

5. Optionally, create an admin user account on the portal.

```
cd backend && pipenv run python manage.py createsuperuser
```

## Running development servers

To start both the backend and frontend dev servers concurrently, run the following command:

```
npm run start-servers
```

To start the frontend server individually, run the following command:

```
npm run start-frontend
```

To start the backend server individually, run the following command:

```
npm run start-backend
```

## Running tests

To run all tests for the backend and frontend, run the following command:

```
npm run test-all
```

To run just the backend tests, run:

```
npm run test-backend
```

To run just the frontend tests, run:

```
npm run test-frontend
```

To run just the frontend unit tests, run:

```
cd frontend && npm run test:unit
```

To run just the frontend end-to-end tests, run:

```
cd frontend && npm run test:e2e
```

> [!NOTE]
> To run frontend end-to-end tests, Google Chrome or Chromium must be installed.
> You can install it on the dev container or a Debian system by running `cd frontend && npm run test:e2e-install-browsers`

## Building and deployment

[See this document](docs/deployment.md) for an outline of how the portal backend and frontend
could be deployed.

## Authors

Developers:

- Alisha Crasta
- Andrews Essilfie
- Ayo Akindele
- Kyle McLean
- Natasha Osmani
- Will Fenton

Instructors:

- Mohayeminul Islam (TA)
- Ildar Akhmetov

## License

This project is licensed under the MIT license.

It is an open-source project, as part of the University of Alberta's Student Open-Source Initiative.
