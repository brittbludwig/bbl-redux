# My Vite React Router App

This project is a simple React application built with Vite and React Router. It serves as a template for creating single-page applications with routing capabilities.

## Features

- Fast development with Vite
- Client-side routing with React Router
- TypeScript support

## Project Structure

```
my-vite-react-router-app
├── src
│   ├── main.tsx          # Entry point of the application
│   ├── App.tsx           # Main App component with routing
│   ├── routes            # Contains route components
│   │   ├── Home.tsx      # Home page component
│   │   └── NotFound.tsx   # 404 Not Found component
│   └── types             # Custom types and interfaces
│       └── index.ts
├── index.html            # Main HTML file
├── package.json          # npm configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-vite-react-router-app
npm install
```

## Development

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default browser.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized build of your application in the `dist` directory.

## Usage

You can navigate to the home page and explore the application. If you try to access an undefined route, you will be redirected to the Not Found page.

## License

This project is licensed under the MIT License.