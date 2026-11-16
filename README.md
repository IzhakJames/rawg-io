# Game Hub

A video game discovery app built with React and TypeScript, powered by the [RAWG Video Games Database API](https://rawg.io/apidocs). Browse thousands of games, filter by genre and platform, sort the results and search by name.

**Live demo:** _coming soon on Vercel_

## About this version

This is a rebuild of my earlier project, [game-hub](https://github.com/IzhakJames/game-hub). The original was built on Chakra UI v2 and older tooling, so I rebuilt it from scratch on current versions and cleaned up the code along the way.

### What's new compared to game-hub

- **Chakra UI v2 → v3**, using the new compound component API (`Card.Root`, `Menu.Trigger`, `List.Item` and so on). framer-motion and `@emotion/styled` are no longer needed.
- **Bootstrap removed.** All styling now comes from Chakra.
- **Newer tooling:** Vite 7 → 8, TypeScript 5 → 6, ESLint 8 → 9 (flat config), react-icons 4 → 5.
- **A generic `useData<T>` hook** handles fetching, loading, errors and request cancellation for every endpoint, so `useGames`, `useGenres` and `usePlatforms` are each only a few lines.
- **A single `GameQuery` object** holds all the filters, sorting and search, so adding a new option means touching only a few places.
- **Smaller images:** game images are requested at 600×400 from RAWG's image server instead of at full resolution.
- **Loading skeletons** that match the real cards' size, so the layout doesn't jump when data arrives.

## Features

- Responsive game grid: 1 to 5 columns depending on screen width
- Filter by **genre** (sidebar with thumbnails; click the selected genre again to clear it)
- Filter by **platform** (dropdown menu)
- **Sort** by relevance, release date, name, date added, rating or critic score
- **Search** games by name
- A heading that reflects the active filters, e.g. "PlayStation Action Games"
- A "Clear Filters" button for genre and platform
- Platform icons, Metacritic score badges and rating emojis on each game card
- Placeholder image for games without artwork
- Dark and light mode (dark by default)

## Tech stack

| Area | Tools |
|---|---|
| Framework | React 19, TypeScript 6 |
| Build tool | Vite 8 |
| UI | Chakra UI v3, next-themes, react-icons |
| Data fetching | axios |
| Linting | ESLint 9, typescript-eslint, eslint-plugin-react-hooks |
| Hosting | Vercel |

## Getting started

### Prerequisites

- Node.js 20.19 or later (required by Vite 8)
- A free RAWG API key: sign up at [rawg.io/apidocs](https://rawg.io/apidocs)

### Setup

```bash
git clone https://github.com/IzhakJames/rawg-io.git
cd rawg-io
npm install
```

Open `src/services/api-client.ts` and replace the value of `key` with your own RAWG API key:

```ts
params: {
  key: "your_rawg_api_key_here",
},
```

Then start the development server:

```bash
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Type-checks the project and builds it for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
src/
├── assets/           # Logo, emojis and the image placeholder
├── components/
│   ├── config/       # Chakra UI and theme providers
│   └── ui/           # GameGrid, GameCard, GenreList, selectors, NavBar and so on
├── hooks/            # useData (generic) plus useGames, useGenres, usePlatforms
├── services/         # The axios client for the RAWG API
└── utils/            # Image URL cropping helper
```

## Deployment

The app is deployed on Vercel, which detects Vite automatically (build command `npm run build`, output folder `dist`). No extra configuration is needed.

The RAWG API key is set directly in `src/services/api-client.ts`. The app runs entirely in the browser, so the key would be visible to anyone using the site either way. That's normal for a frontend-only app using a free API key.

## Possible future improvements

- Switch data fetching to TanStack Query for caching and less repeated loading
- Infinite scrolling to load more than the first page of results
- A genre filter on mobile (the sidebar is currently hidden on small screens)
- A details page for each game

## Credits

Game data and images are provided by [RAWG](https://rawg.io).

Thank you for checking it out! :D
