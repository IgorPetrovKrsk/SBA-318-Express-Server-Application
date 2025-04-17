
import trucks from '../data/trucks';
import {Request,Response} from 'express';
import hateoas from '../hateoas/hateoas';

export function getAllTrucks(req:Request, res:Response) {
    const truckLinks = hateoas.getTrucksLinks();
    res.json({ trucks,truckLinks});
}
