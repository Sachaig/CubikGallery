const AbstractRepository = require("./AbstractRepository");

class ProductRepository extends AbstractRepository {
  constructor() {
    super({ table: "products" });
  }

  async create(products) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, price, image_url)
                VALUES (?, ?, ?, ?, ?, ?)`,
      [
        products.name,
        products.description,
        products.price,
        products.image_url,
      ]
    );
    return result.insertId;
  }
  
  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }
  
  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

}
module.exports = ProductRepository;