
import orders, { Order, OrderStatus } from '../data/orders';
import { Request, Response, NextFunction } from 'express';
import hateoas from '../hateoas/hateoas';
import error from '../error/error';

function getAllOrders(req: Request, res: Response) {
    const orderLinks = hateoas.getOrdersLinks();
    res.json({ orders, orderLinks });
}

function postNewOrder(req: Request, res: Response, next: NextFunction) {
    if (orders.find((it) => it.id == req.body.id)) { //id is already exists
        next(error(406, `Order with ID ${req.body.id} already exists`));
    } else if (req.body.id && req.body.origin && req.body.destination && req.body.weight) {
        const newOrder: Order = {
            id: req.body.id,
            origin: req.body.origin, //can be null
            destination: req.body.destination,
            weight: req.body.weight,
            status: (req.body.status) ? OrderStatus[req.body.status as keyof typeof OrderStatus] : OrderStatus.Pending, //if there is no status present then default status is Pending
            truckId: req.body.truckId
        };
        orders.push(newOrder);
        res.json(orders[orders.length - 1]);
    } else
        next(error(400, 'Insufficient Data'));
}

// function deleteAllTrucks(req: Request, res: Response) {
//     trucks.length = 0; //clearing the array
//     res.json({ trucks });
// }

// //functions what works with id
// function getTruckById(req: Request, res: Response, next: NextFunction) {
//     const truckId: number = req.query.truckId
//         ? parseInt(req.query.truckId as string, 0)
//         : parseInt(req.params.truckId as string, 0);
//     const truckByIdLinks = hateoas.getTruckByIdLinks(truckId);
//     const truck = trucks.find((it) => it.id == truckId);

//     if (truck)
//         res.json({ truck, truckByIdLinks });
//     else
//         next();
// }

// function putTruckById(req: Request, res: Response, next: NextFunction) {
//     const truckId: number = req.query.truckId
//         ? parseInt(req.query.truckId as string, 0)
//         : parseInt(req.params.truckId as string, 0);

//     const truck = trucks.find((it) => it.id === truckId);

//     if (truck && req.body.licensePlate && req.body.capacity) {
//         truck.driverName = req.body.driverName; //can be null
//         truck.licensePlate = req.body.licensePlate;
//         if (req.body.status) {
//             truck.status = TruckStatus[req.body.status as keyof typeof TruckStatus];
//         }
//         truck.capacity = req.body.capacity;
//         res.json(truck);
//     }
//     else next();
// }

// function deleteTruckById(req: Request, res: Response, next: NextFunction) {

//     const truckId: number = req.query.truckId
//         ? parseInt(req.query.truckId as string, 0)
//         : parseInt(req.params.truckId as string, 0);
//     console.log(`Treack id = ${truckId}`);

//     const truck = trucks.find((it, i) => {
//         if (it.id == truckId) {
//             trucks.splice(i, 1);
//             return true;
//         }
//     });

//     if (truck) res.json(truck);
//     else next();
// }

export default { getAllOrders, postNewOrder }
