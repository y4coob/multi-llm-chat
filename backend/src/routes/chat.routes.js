const express = require("express")
const { chatWithModel } = require("../controllers/chat.controller")
const { authMiddleware } = require("../middleware/auth.middleware")

const router = express.Router()

router.post("/",  chatWithModel)

module.exports = router

