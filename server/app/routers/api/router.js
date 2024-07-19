    const express = require("express");

    const router = express.Router();

    /* ************************************************************************* */
    // Import And Use Routers Here
    /* ************************************************************************* */

    const itemsRouter = require("./items/router");

    router.use("/items", itemsRouter);

    const productsRouter = require("./products/router");

    router.use("/products", productsRouter);


    const ordersRouter = require("./orders/router"); 

    router.use("/orders", ordersRouter);


    /* ************************************************************************* */

    module.exports = router;
