import express from 'express';
import trucks from '../controllers/truckController';

const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        if (Object.keys(req.query).length === 0) {
            trucks.getAllTrucks(req, res);
        } else {
            trucks.getTruckById(req, res, next); //getting single truck by id in querry parametr
        }
    })
    .post(trucks.postnewTruck)
    .delete(trucks.deleteAllTrucks); //this is not safe

router
    .route('/:truckId') 
    .get(trucks.getTruckById) //getting truck by Id
    .put(trucks.putTruckById)
    .delete(trucks.deleteTruckById);

export default router;
