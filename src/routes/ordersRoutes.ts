import express from 'express';
import ordersController from '../controllers/ordersController';

const router = express.Router();

router
    .route('/')
    .get(ordersController.getAllOrders)
    .post(ordersController.postNewOrder)
    //.delete(trucks.deleteAllTrucks); //this is not safe

// router
//     .route('/:truckId') 
//     .get(trucks.getTruckById) //getting truck by Id
//     .put(trucks.putTruckById)
//     .delete(trucks.deleteTruckById);

export default router;
