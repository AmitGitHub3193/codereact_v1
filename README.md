# React Todo App

A simple Todo application built with React and Tailwind CSS. This project demonstrates basic React concepts including:

- Components and Props
- State Management with useState
- Event Handling
- Conditional Rendering
- List Rendering
- Modern UI with Tailwind CSS

## Project Structure

```
├── src/
│   ├── components/
│   │   └── TodoItem.jsx    # Individual todo item component
│   ├── App.jsx            # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Responsive design
- Clean and modern UI

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

## Learning Points

1. **Components**: The app is split into reusable components (App and TodoItem)
2. **State Management**: Uses React's useState hook for managing todos
3. **Props**: Demonstrates prop passing between parent and child components
4. **Event Handling**: Shows how to handle user interactions
5. **Tailwind CSS**: Uses utility classes for styling

## Next Steps

- Add localStorage to persist todos
- Add categories or tags for todos
- Add due dates
- Add filters (all, active, completed)
- Add animations 