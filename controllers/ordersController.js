const path = require("path");
const fs = require("fs");
const dataPath = path.resolve(__dirname, "../data.json");
const { v4: uuidv4 } = require("uuid");

const status = ["placed", "packed", "dispatched", "delivered"];

const saveData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

const getData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};
const quanityLeft = (date) => {
  const data = getData();
  const max = data.maxCapacity;
  let ordered = 0;
  data.data.forEach((order) => {
    if (order.date === date) ordered += order.qty;
  });
  const left = max - ordered;
  return left;
};
module.exports.getAllOrders = (req, res) => {
  const jsonData = fs.readFileSync(dataPath);
  res.send(JSON.parse(jsonData));
};
module.exports.addOrder = (req, res) => {
  const d = new Date();
  const data = getData();
  const date = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  const left = quanityLeft(date);
  const order = {
    qty: req.body.qty,
    id: uuidv4(),
    date,
    status: "placed",
  };
  if (order.qty <= left) {
    data.data.push(order);
    saveData(data);
    res.send({ order, message: "order placed" });
  } else
    res.send(
      `Quantity left for ${date} is ${left} litres. Sorry we could not place your order`
    );
};
module.exports.updateOrder = (req, res) => {
  const { qty } = req.body;
  const id = req.params.id;
  const data = getData();
  let order;
  data.data.forEach((item) => {
    if (item.id === id) {
      const left = quanityLeft(item.date) + item.qty;
      if (qty <= left) {
        item.qty = qty;
        order = item;
      } else
        res.send(
          `Quantity left for ${item.date} is ${left} litres. Sorry we could not update your order`
        );
    }
  });
  saveData(data);
  res.send({ order, message: "success in updating order" });
};
module.exports.deleteOrder = (req, res) => {
  const id = req.params.id;
  const data = getData();
  data.data = data.data.filter((item) => item.id !== id);
  saveData(data);
  res.send("success in deleting your order");
};
module.exports.updateStatus = (req, res) => {
  const id = req.params.id;

  const data = getData();
  const item = data.data.filter((order) => order.id === id);
  const index = status.indexOf(item[0].status);
  data.data.forEach((order) => {
    if (order.id === id) order.status = status[Math.min(index + 1, 3)];
  });

  saveData(data);
  res.send("order status updated");
};
module.exports.checkCapacity = (req, res) => {
  const { date } = req.params;
  const left = quanityLeft(date);
  res.send({ "quantity of milk left": left });
};
