import express from 'express';
import trucks from '../controllers/truckController';

const router = express.Router();

router
  .route('/')
  .get(trucks.getAllTrucks)
  .post(trucks.postnewTruck); 

// router
//   .route('/:id') //geting truck by Id
//   .get(getTruckById)
//   .put(putTruckById)
//   .delete(deleteTruckById);

export default router;
