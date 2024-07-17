CREATE TABLE products (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255)
);

CREATE TABLE orders (
    id INT unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE products_order (
    id INT unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
    quantity INT NOT NULL,
    product_id INT unsigned NOT NULL,
    order_id INT unsigned NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

