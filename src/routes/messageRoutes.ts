import express from 'express';
import messagesController from '../controllers/messagesController';

const router = express.Router();

router
    .route('/')
    .get(messagesController.getAllMessages)
    .post(messagesController.postNewMessage)
    // .delete(ordersController.deleteAllOrders)
    // .patch(ordersController.methodNotAllowed);

// router
//      .route('/:orderId') 
//      .get(ordersController.getOrderById) 
//      .patch(ordersController.patchOrderById)
//      .delete(ordersController.deleteOrderById)
//      .post(ordersController.methodNotAllowed);

export default router;
