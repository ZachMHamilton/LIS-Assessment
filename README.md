# LIS Code Screen

This is a full-stack coding exercise that implements a basic submission tracker. The tech stack is react + vite on the frontend, with an Express (node) backend. For ease of use, the backend supports two storage modes: **SQL database** or **in-memory**. You can toggle between these options using a flag in the configuration.

## How to Run

1. Clone the repository
2. Run npm install
3. Choose data store
      - If using SQL database:
        - Set useDb flag in server.ts to true
        - Create a .env file in the root of the project based on .env.example
        - Set env variables for your database
        - Table structure can be found in server/models/submission.ts
      - If using in memory store
        - Set useDb flag in server.ts to false
4. Run 'npm run dev' in terminal (this runs client and server concurrently)

## Project Structure
/client # React + Vite frontend
|____ App.tsx
|____ types.ts

/client # React + Vite frontend  |____ /pages       # Two main component pages
  |____ App.tsx      # Routing component
  |____ types.ts     # Basic types
  |____ main.tsx     # Main entry point for react
  |____ index.ts     # Base html entry
/server          # Express + Node backend
  ├── /controllers  # Primary business logic
  ├── /routes       # Defines endpoints
  ├── /db           # SQL and in-memory storage implementations
  ├── /models       # Schemas/types
  └── index.ts     # Server entry point