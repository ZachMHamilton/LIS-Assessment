# LIS Code Screen

This is a full-stack coding exercise that implements a basic submission tracker. The tech stack is react + vite on the frontend, with an Express (node) backend. For ease of use, the backend supports two storage modes: **SQL database** or **in-memory**. You can toggle between these options using a flag in the configuration.

## How to Run

1. Clone the repository
2. Ensure node version 22.16.0 is installed and used
3. Run npm install for dependencies
4. Choose data store
      - If using SQL database:
        - Set useDb flag in server.ts to true
        - Create a .env file in the root of the project based on .env.example
        - Set env variables for your database
        - Table structure can be found in server/models/submission.ts
      - If using in memory store
        - Set useDb flag in server.ts to false
        - Note: With in memory store, data will be lost when app is restarted
5. Run 'npm run dev' in terminal (this runs client and server concurrently)

## Project Structure
- /client/src - **React + vite frontend**
  - App.tsx  - **Routing component**
  - types.ts - **Basic types**
  - main.tsx - **Main entry point for react**
  - index.ts - **Base html entry**
- /server - **Node + Express backend**
  - index.ts **Main server entry**
  - /controllers - **Primary business logic**
  - /routes - **Defines endpoints**
  - /db - **SQL and in-memory storage implementations**
  - /models - **Schemas/types**
