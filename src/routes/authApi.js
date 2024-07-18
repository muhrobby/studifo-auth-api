const { Router } = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { logout } = require("../controllers/authController");

const authApi = Router();

authApi.use(authMiddleware);
authApi.delete("/api/user/logout", logout);

module.exports = authApi;
