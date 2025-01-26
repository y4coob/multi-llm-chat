const User = require("../models/user.model")

exports.getUserApiKeys = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("apiKeys")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    res.json({ apiKeys: user.apiKeys })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

exports.updateUserApiKeys = async (req, res) => {
  try {
    const { apiKeys } = req.body
    const user = await User.findByIdAndUpdate(req.user.id, { $set: { apiKeys } }, { new: true }).select("apiKeys")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    res.json({ apiKeys: user.apiKeys })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

