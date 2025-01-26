const express = require("express")
const { getUserApiKeys, updateUserApiKeys } = require("../controllers/user.controller")
const { authMiddleware } = require("../middleware/auth.middleware")

const router = express.Router()

router.get("/api-keys", authMiddleware, getUserApiKeys)
router.put("/api-keys", authMiddleware, updateUserApiKeys)

module.exports = router

