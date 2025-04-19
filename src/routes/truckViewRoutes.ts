import express from 'express';

const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
         //rendering a view instead of returning json
         const data = { title: "This is all the truck in disposal", message: "Hello, world!", message2: "This is a test from EJS" };
         res.render("trucks", data);
    });
export default router;
