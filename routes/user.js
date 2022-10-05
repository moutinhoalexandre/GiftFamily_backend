import { Router } from "express";
const router = Router();

// import {
//   signup,
//   login,
//   getUser,
//   getUsers,
//   deleteUser,
//   updateUsers,
//   updatePaswword,
// } from "../controllers/users.controller";

router.post("/signup", signup); //Create user
router.post("/login", authentificationLimiter, login); //Login existing user

router.get("/profile/", getUsers); //Get all users
router.get("/profile/:id", getUser); //Get one user
router.delete("/profile/:id", deleteUser); //Delete one user
router.put("/profile/:id", updateUsers); //Modify one user
router.put("/profile/:id/paswword", updatePassword); //Modify one user password


export default router;
