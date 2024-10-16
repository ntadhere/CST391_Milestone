// import express, { Request, Response } from "express";
// import dotenv from "dotenv";

// // Loads environment variables from the .env file. This is useful for defining variables such as PORT or database connection strings.
// dotenv.config();

// const app = express();
// const port = 3000;

// // Make sure you understand the following line of code.
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World from TypeScript!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


// Importing the Express library along with Request and Response types for TypeScript.
import express, { Request, Response } from 'express';
import blogsRouter from './blogs/blogs.routes';
import authorsRouter from './author/authors.routes';
import cors from 'cors';
import logger from './middleware/logger.middleware';
import helmet from 'helmet';
import dotenv from "dotenv";

// Loads environment variables from the .env file. This is useful for defining variables such as PORT or database connection strings.
dotenv.config();

// Initializes the Express application
const app = express();

// Reads the PORT variable from the environment configuration to determine which port the app should run on.
const port = process.env.PORT;

//******MIDDLEWARE SET UP *******/
// Enable all CORS request
app.use(cors());
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true}));
// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if (process.env.NODE_ENV == 'development') {
    //add logger middleware
    //logs details about each incoming request (like method, URL, etc.) to the console or a log file. 
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}

// Application routes
// root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API<h1/>');
  });
// adding router middleware
app.use('/', [blogsRouter , authorsRouter] );

// Starting the server and making it listen on the specified port.
app.listen(port, () => {
    // Logging a message to the console when the server starts successfully.
    console.log(`Example app listening at http://localhost:${port}`)
});