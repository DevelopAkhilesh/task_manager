# Task Manager

A clean React task manager built with Vite. It lets you add tasks, edit them, mark them as completed, delete them, and keep your list saved in the browser with `localStorage`.

## Features

- Add new tasks with the input field or Enter key
- Mark tasks as complete or incomplete
- Edit existing task text
- Delete tasks
- Persistent storage using browser `localStorage`
- Responsive polished UI with separate component CSS files

## Tech Stack

- React 19
- Vite
- CSS
- UUID
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  App.jsx
  main.jsx
  components/
    Header/
      Header.jsx
      Header.css
    TodoList/
      TodoList.jsx
      TodoList.css
    TodoItem/
      TodoItem.jsx
      TodoItem.css
```

## Component Overview

`Header` manages the main task state, handles adding tasks, updates `localStorage`, and passes todo actions down to the list.

`TodoList` renders the task collection and displays the empty list state.

`TodoItem` renders each task, including complete, edit, save, cancel, and delete controls.

## Notes

Tasks are stored locally in the browser. Clearing browser storage will remove saved tasks.
