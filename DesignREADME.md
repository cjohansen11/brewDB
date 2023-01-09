# BrewDB with Next.js, Node and Prisma

## Technologies

- Typescript
- Next.js
- Prisma (postgres)
- Zod
- CSS Extention options - PostCSS, Stylus, Tailwindcss
- Google Map React

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

- Node.js, Express and Prisma (postgres)

### Routes

#### /breweries

- `/`: List all breweries
  - Params: take, cursor, skip
  - Filters: name, country, state/county_province
- `/:id`: Get brewery by ID

#### /health

- `/`: Basic server status
