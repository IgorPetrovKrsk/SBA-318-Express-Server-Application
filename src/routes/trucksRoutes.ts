import express from 'express';
import { getAllTrucks } from '../controllers/truckController';

const router = express.Router();

router
  .route('/')
  .get(getAllTrucks)
//  .post(postNewTruck); 

// router
//   .route('/:id') //geting truck by Id
//   .get(getTruckById)
//   .put(putTruckById)
//   .delete(deleteTruckById);

export default router;
