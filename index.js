import express from "express"; // Import express
import cors from "cors"; // Import cors

const app = express(); // Instance of an application
app.use(cors()); // Allows requests between the client and the server
app.use(express.json()); // Transform request into Json
app.use(express.urlencoded({extended:false})); // Transform from request into Json


/* Listening to the port 3001 and printing a message in the console. */
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
