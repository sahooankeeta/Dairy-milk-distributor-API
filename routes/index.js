const express = require("express");
const fs = require("fs");
const {
  getAllOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  updateStatus,
  checkCapacity,
} = require("./../controllers/ordersController");
const router = express.Router();

router.get("/", getAllOrders);
router.post("/add", addOrder);
router.patch("/update/:id", updateOrder);
router.patch("/updateStatus/:id", updateStatus);
router.delete("/delete/:id", deleteOrder);
router.get("/checkCapacity/:date", checkCapacity);
module.exports = router;
