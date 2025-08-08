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
- /client/src     &nbsp; &nbsp; &nbsp; &nbsp;**React + vite frontend**
  - App.tsx           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Routing component**
  - types.ts          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Basic types**
  - main.tsx          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Main entry point for react**
  - index.ts          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Base html entry**
- /server         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Node + Express backend**
  - /controllers      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Primary business logic**
  - /routes           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Defines endpoints**
  - /db               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**SQL and in-memory storage implementations**
  - /models           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**Schemas/types**