const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all orders from the database
    const orders = await tables.orders.readAllWithProducts();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific order from the database based on the provided ID
    const order = await tables.orders.readWithProducts(req.params.id);
    if (!order) {
      res.sendStatus(404);
    } else {
      res.json(order);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const updatedOrder = req.body;

    const result = await tables.orders.update(orderId, updatedOrder);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const newOrder = req.body;
    const result = await tables.orders.create(newOrder);
    res.status(201).json({ id: result });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const result = await tables.orders.delete(orderId);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, add, edit, destroy };
