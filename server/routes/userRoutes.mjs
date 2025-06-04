import express from "express";
const router = express.Router();
import { getAllUsers, login, registration, updateUser} from "../controllers/userController.mjs"

router.post("/registration", registration);
router.post("/login", login);
router.get("/get-all-users", getAllUsers);
router.patch("/update-user-by-id", updateUser)

export default router;