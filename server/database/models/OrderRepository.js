const AbstractRepository = require("./AbstractRepository");

class OrderRepository extends AbstractRepository {
  constructor() {
    super({ table: "orders" });
  }

  async create(order) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email) VALUES (?, ?, ?)`,
      [order.firstname, order.lastname, order.email]
    );
    const orderId = result.insertId;

    const insertPromises = order.items.map(item =>
      this.database.query(
        `INSERT INTO products_order (quantity, product_id, order_id)
         VALUES (?, ?, ?)`,
        [item.quantity, item.id, orderId]
      )
    );

    await Promise.all(insertPromises);

    return orderId;
  }

  async readWithProducts(orderId) {
    const [rows] = await this.database.query(
      `SELECT orders.id, orders.firstname, orders.lastname, orders.email, products.name AS product_name, products_order.quantity
       FROM orders
       JOIN products_order ON orders.id = products_order.order_id
       JOIN products ON products.id = products_order.product_id
       WHERE orders.id = ?`,
      [orderId]
    );
    if (rows.length === 0) return null;

    const order = {
      id: rows[0].id,
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      email: rows[0].email,
      items: rows.map(row => ({
        product_name: row.product_name,
        quantity: row.quantity
      }))
    };
    return order;
  }

  async readAllWithProducts() {
    const [rows] = await this.database.query(
      `SELECT orders.id, orders.firstname, orders.lastname, orders.email, products.name AS product_name, products_order.quantity
       FROM orders
       JOIN products_order ON orders.id = products_order.order_id
       JOIN products ON products.id = products_order.product_id`
    );

    const ordersMap = new Map();
    rows.forEach(row => {
      if (!ordersMap.has(row.id)) {
        ordersMap.set(row.id, {
          id: row.id,
          firstname: row.firstname,
          lastname: row.lastname,
          email: row.email,
          items: []
        });
      }
      ordersMap.get(row.id).items.push({
        product_name: row.product_name,
        quantity: row.quantity
      });
    });

    return Array.from(ordersMap.values());
  }

  async update(orderId, order) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ? WHERE id = ?`,
      [order.firstname, order.lastname, order.email, orderId]
    );
    return result;
  }

  async delete(orderId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [orderId]
    );
    return result;
  }
}

module.exports = OrderRepository;
