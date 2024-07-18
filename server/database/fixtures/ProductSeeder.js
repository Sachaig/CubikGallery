const AbstractSeeder = require("./AbstractSeeder");

class ProductSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "products", truncate: true });
  }

  run() {
    const products = [
      {
        name: "Cubescape",
        description: "taille : 70x70cm",
        price: 90,
        image_url: "/artwork/artwork1.png",
      },
      {
        name: "Iron-man",
        description: "taille : 140x200cm",
        price: 180,
        image_url: "/artwork/artwork4.png",
      },
      {
        name: "Edouard aux mains d'argent",
        description: "taille : 160x100cm",
        price: 140,
        image_url: "/artwork/artwork7.png",
      },
      {
        name: "Spider-man",
        description: "taille : 100x140cm",
        price: 130,
        image_url: "/artwork/artwork3.png",
      },
      {
        name: "Jimmy Hendrix",
        description: "taille : 120x90cm",
        price: 130,
        image_url: "/artwork/artwork8.png",
      },
      {
        name: "Marilyn Monroe",
        description: "taille : 120x90cm",
        price: 150,
        image_url: "/artwork/artwork6.png",
      },
      {
        name: "La femme",
        description: "taille : 70x90cm",
        price: 100,
        image_url: "/artwork/artwork2.png",
      },
      {
        name: "Vacances",
        description: "taille : 90x80cm",
        price: 100,
        image_url: "/artwork/artwork9.png",
      },
      {
        name: "PIKAAAAAA fatigué",
        description: "taille : 220x130cm",
        price: 100,
        image_url: "/artwork/artwork5.png",
      },
    ];

    products.forEach((product) => {
      this.insert(product);
    });
  }
}

module.exports = ProductSeeder;
