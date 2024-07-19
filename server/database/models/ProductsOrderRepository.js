// const AbstractRepository = require("./AbstractRepository");

// class ProductsOrderRepository extends AbstractRepository {
//   constructor() {
//     super({ table: "products_order" });
//   }

//   async add(productsOrder) {
//     const [result] = await this.database.query(
//       `INSERT INTO ${this.table} (quantity, product_id, order_id)
//                 VALUES (?, ?, ?)`,
//       [productsOrder.quantity, productsOrder.product_id, productsOrder.order_id]
//     );
//     return result.insertId;
//   }

//   async readByOrderId(orderId) {
//     const [rows] = await this.database.query(
//       `SELECT * FROM ${this.table} WHERE order_id = ?`,
//       [orderId]
//     );
//     return rows;
//   }
// }

// module.exports = ProductsOrderRepository;
