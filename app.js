import express from "express"; // Import express
import cors from "cors"; // Import cors
//Importing routes
import UserRoutes from './routes/user.js';
import { ValidationError } from "sequelize";

const app = express(); // Instance of an application
app.use(cors()); // Allows requests between the client and the server
app.use(express.json()); // Transform request into Json
app.use(express.urlencoded({ extended: false })); // Transform from request into Json

//routes
app.use('./api/user', UserRoutes)


// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});



// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
});

// Error formatter
// format all errors before returning a JSON response
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors, //errors array
        stack: isProduction ? null : err.stack
    });
});

export default app;