
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes")
const chatRoutes = require("./routes/chat.routes")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: 
      "http://localhost:3000" 
    ,             
    credentials: true,
  }),
)
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/chat", chatRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something broke!", error: err.message })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" })
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err) => console.error("MongoDB connection error:", err))

