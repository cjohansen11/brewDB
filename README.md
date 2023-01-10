# BrewDB

A full stack application to display breweries around the world.

## Installation

- Clone repo:

##### HTTPS:

```bash
    git clone https://github.com/cjohansen11/brewDB.git
```

##### SSH:

```bash
    git clone git@github.com:cjohansen11/brewDB.git
```

- Start Docker either with the Application or CLI - [Install Docker](https://docs.docker.com/desktop/)
- Navigate into the brewDB directory `cd brewDB`
- Install dependencies `yarn`
- Create server `.env`
- Create `env` files - See Environmental Variables section below
- To start API run:

```bash
    docker-compose up
```

- Open another terminal tab
- To start client run:

```bash
    yarn dev
```

- Navigate to `localhost:3000`

## Environmental Variables

- Duplicate `apps/api/.example.env` and rename `.env`
- Duplicate `apps/next-app/.example.env.local` and rename `.env.local`

### Node Variables

To run this project, you will need to add the following environment variables to your `apps/api/.env` file

```javascript
    CORS_ORIGIN=http://localhost:3000
```

### NextJS Variables

To run this project, you will need to add the following environment variables to your `apps/next-app/.env.local` file

To generate the Google API Key go to [Create Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

```javascript
    NEXT_PUBLIC_API=http://localhost:3001
    NEXT_PUBLIC_GOOGLE_API_KEY=
```

## API - Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20609206-b134250e-2b77-4261-9415-528fb57c87b6?action=collection%2Ffork&collection-url=entityId%3D20609206-b134250e-2b77-4261-9415-528fb57c87b6%26entityType%3Dcollection%26workspaceId%3D7b638411-a7f3-4826-a9d0-d235d3a4e078#?env%5BBrewDB%20Environment%5D=W3sia2V5IjoiYmFzZVVSTCIsInZhbHVlIjoibG9jYWxob3N0OjMwMDEvIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6ImJyZXdlcnlJZCIsInZhbHVlIjoiYmVhY2gtY2F0LWJyZXdpbmctYmxhaW5lIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)

## Acknowledgements

- [Open Brewery DB](https://www.openbrewerydb.org/)

## Authors

- [@cjohansen11](https://www.github.com/cjohansen11)
