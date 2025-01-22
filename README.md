# Todo App Express

This project is a **Todo Application** built using **Express.js**, **Prisma**, and **MySQL**. It provides a RESTful API for managing todo items, allowing users to create, read, update, and delete tasks.

## Features

- **CRUD Operations**: Manage todo items with full Create, Read, Update, and Delete functionality.
- **Database Integration**: Utilizes Prisma as an ORM to interact with a remote MySQL database (MySQL databse is remotely hosted on [Aiven](https://aiven.io/)).
- **Express.js Server**: Handles API requests and responses efficiently.

## Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kashyapjagwani/todo-app-express.git
   cd todo-app-express

2. **Install npm packages**
   ```bash
   npm i

3. **Create a `.env` file and add the following to it**
   ```bash
   DATABASE_URL="mysql://avnadmin:AVNS_y6WruKZqVyDtFLqRj4X@todo-app-nooro-todo-app-nooro.c.aivencloud.com:28468/defaultdb"
   PORT=3001
4. **Run the server**
   ```bash
      npm run start
