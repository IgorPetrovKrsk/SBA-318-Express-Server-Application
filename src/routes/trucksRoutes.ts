import express from 'express';
import trucks from '../controllers/truckController';

const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        if (Object.keys(req.query).length === 0) {
            trucks.getAllTrucks(req, res);
        } else {
            trucks.getTruckById(req, res, next);
        }
    })    
    .post(trucks.postnewTruck)
    .delete(trucks.deleteAllTrucks); //this is not safe
    router.get('/', trucks.getTruckById); // get truck from querry parametr just for training

router
    .route('/:truckId')
    .get(trucks.getTruckById) //geting truck by Id
    

//   .put(putTruckById)
//   .delete(deleteTruckById);

export default router;
