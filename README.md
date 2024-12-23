# Lendsqr Frontend Assessment

## Overview

This project is built using [Vite](https://vitejs.dev/) and tested using [Vitest](https://vitest.dev/), a fast and modern build tool that provides an optimized development environment. Vite focuses on performance and simplicity, enabling fast hot-reloading, efficient builds, and a smooth development experience.

## Features

- **Fast Development Environment**: Hot Module Replacement (HMR) for fast feedback during development.
- **Optimized Production Builds**: Automatically optimizes your code for faster loading times and improved performance.
- **Support for Modern JavaScript**: Out-of-the-box support for ES modules, TypeScript, JSX, and more.
- **React**: Easily integrates with React for building interactive UIs.
- **CSS Preprocessing**: Supports SASS, LESS, and PostCSS out of the box.

## Getting Started

Follow the steps below to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed on your system. You can check if it's installed by running:

```bash
node -v
```

### Installation

```bash
git clone <repository-url>
```

### Navigate to the project directory

```bash
cd <project-directory>
```

### Install the project dependencies:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Now the project is running at http://localhost:5173

## Production Build

To build the project for production, use the following command:

```bash
npm run build
```

This command will bundle your project, optimize it for production, and generate static files in the dist directory.

### Preview the Production Build

```bash
npm run serve
```

## Folder Structure

```bash

lendsqr-fe-test/
├── public/                   # Public assets
│   └── index.html            # HTML template
├── src/                      # Source files
│   ├── assets/               # Assets such as images and icons
│   │   └── svg/              # SVG icons
│   ├── components/           # React components
│   │   ├── table/            # Table components
│   │   │   ├── Datatable.module.scss
│   │   │   └── Datatable.tsx
│   │   └── otherComponent/   # Other components
│   │       ├── Component.module.scss
│   │       └── Component.tsx
│   ├── context/              # Context providers
│   │   └── DashboardContext.tsx
│   ├── schemas/              # data validation schemas
│   │   └── form schema
│   ├── scss/                 # SCSS files
│   │   ├── colors.scss
│   │   └── main.scss
│   ├── tests/                # test setup
│   │    └── setup.ts
│   ├── types/                # TypeScript type definitions
│   │    └── index.ts
│   ├── App.tsx               # Main App component
│   ├── main.tsx             # Entry point for React
│   └── vite-env.d.ts         # Vite environment types
├── .gitignore                # Git ignore file
├── index.html                # HTML template
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── vitest.config.ts          # Vitest configuration
└── README.md                 # Project documentation
```

## Technologies Used

- **Vite**: A modern, fast build tool and development server.
- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling routing in React applications.
- **SCSS**: CSS preprocessor for styling the application.
- **TypeScript**: A superset of JavaScript that provides optional static typing.
- **Vitest**: Vite-native testing framework.
- **TanStack Query**: Data fetching and state management for React.
- **React Toastify**: for handling alerts

## Custom Configuration

The Vite configuration file (vite.config.ts) can be modified to suit specific project needs. You can add plugins, define aliases, or modify build options as required.

Example of a basic vite.config.js file:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

## Running Tests

This project uses Vitest for testing. To run the tests, use the following command:

```bash
npm run test
```

## Setting Up Vitest for new project

### install vitest

```bash
npm install -D vitest
```

Vitest is configured for testing in this project. You can modify or add test configurations in the vitest.config.ts file if needed.

```javascript
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "/src/test/setup.ts",

    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

## License

This `README.md` provides a comprehensive overview of the project setup, features, and how to get started with development, testing, and deployment. Also, you can access the project documentation [here](https://docs.google.com/document/d/1ZkHEcmqr9bYu7gIQ2hbTnwgDiMIYuSP-OcWE0JfbIpY/edit?usp=sharing) Let me know if you need further modifications!
