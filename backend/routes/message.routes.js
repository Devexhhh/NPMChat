import express from "express"
import { protectRoute } from "../middleware/auth.js"
import {
  getMessages,
  getUserForSidebar,
  markMessagesAsSeen,
  sendMessage,
  editMessage,
  deleteMessage
} from "../controllers/message.controller.js"

const messageRouter = express.Router()

messageRouter.get("/", protectRoute, getUserForSidebar)
messageRouter.get("/:userId", protectRoute, getMessages)
messageRouter.put("/mark-as-seen/:userId", protectRoute, markMessagesAsSeen)
messageRouter.post("/send/:receiverId", protectRoute, sendMessage)
messageRouter.put("/edit/:messageId", protectRoute, editMessage)
messageRouter.delete("/delete/:messageId", protectRoute, deleteMessage)

export default messageRouter
