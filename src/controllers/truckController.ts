
import trucks, { Truck, TruckStatus } from '../data/trucks';
import {Request,Response,NextFunction} from 'express';
import hateoas from '../hateoas/hateoas';
import error from '../error/error';

function getAllTrucks(req:Request, res:Response) {
    const truckLinks = hateoas.getTrucksLinks();
    res.json({ trucks,truckLinks});
}

function postnewTruck(req:Request, res:Response, next:NextFunction) {
    if (req.body.licensePlate && req.body.capacity) {
        const newTruck:Truck = {
            id: trucks[trucks.length - 1].id + 1,
            driverName: req.body.driverName, //can be null
            licensePlate: req.body.licensePlate,
            status: (req.body.status)? TruckStatus[req.body.status as keyof typeof TruckStatus]: TruckStatus.Idle, //if there is no status present then default status is idle
            capacity: req.body.capacity
        };
        trucks.push(newTruck);
        res.json(trucks[trucks.length - 1]);
    } else next(error(400, 'Insufficient Data'));
}

export default {getAllTrucks, postnewTruck}
