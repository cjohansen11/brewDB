# BrewDB with tRPC, Next.js, and Prisma

## Technologies

- Typescript
- Next.js
- Prisma (postgres)
- Zod
- CSS Extention options - PostCSS, Stylus
- Google Map React?
- User auth? Paseto or JWT

## Features

- List all breweries (Must display: Name, Type, Address, Website (if applicable))
  - Filter breweries by Country and/or State/County_Province
  - Search breweries by Name, Country, State/County_Province
- Individual brewery details page (Must display: Name, Address, Map)
  - Clicking a brewery website will open a new tab
- App Navigation (Home, All Breweries)

### Stretch Features

- User login with authentication

## Server Design

- Node.js, Express, Prisma (postgres) and tRPC

### Routes

#### /breweries

- `/`: List all breweries
  - Params: take, cursor, skip
  - Filters: name, country, state/county_province
- `/:id`: Get brewery by ID

#### /auth

- `/login`: Login and authenticate
- `/logout`: Logout
- `/refresh-token`: Refresh token during session

#### /user

- `/me`: Authenticated route - Fetch user detail information including email and favorites
