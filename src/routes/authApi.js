const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { logout, getUserId } = require("../controllers/authController");

const authApi = Router();

authApi.use(authMiddleware);
authApi.delete("/api/user/logout", logout);
authApi.get("/api/user/current", getUserId);

module.exports = authApi;
