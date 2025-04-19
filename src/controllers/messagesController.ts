
import messages, { Message, MessageStatus } from '../data/messages';
import { Request, Response, NextFunction } from 'express';
import hateoas from '../hateoas/hateoas';
import error from '../error/error';

function getAllMessages(req: Request, res: Response) {
    const messagesLinks = hateoas.getMessagesLinks();
    res.json({ messages, messagesLinks });
}

function postNewMessage(req: Request, res: Response, next: NextFunction) {
    if (req.body.truckId && req.body.content) {
        const newMessage: Message = {
            id: messages[messages.length - 1].id + 1,
            status: MessageStatus.Pending, //Status is always pending on creation
            truckId: req.body.truckId,
            orderId: req.body.orderId,
            content: req.body.content
        };
        messages.push(newMessage);
        res.json(messages[messages.length - 1]);
    } else
        next(error(400, 'Insufficient Data'));
}

// function deleteAllOrders(req: Request, res: Response) {
//     orders.length = 0; //clearing the array
//     res.json({ orders });
// }

// //functions what works with id
// function getOrderById(req: Request, res: Response, next: NextFunction) {
//     const orderId = req.query.orderId ? req.query.orderId as string : req.params.orderId;
//     const orderByIdLinks = hateoas.getOrderByIdLinks(orderId);
//     const order = orders.find((it) => it.id == orderId);

//     if (order)
//         res.json({ order, orderByIdLinks });
//     else
//         next();
// }

// function patchOrderById(req: Request, res: Response, next: NextFunction) {
//     const orderId = req.query.orderId ? req.query.orderId as string : req.params.orderId;
//     const order = orders.find((it) => it.id === orderId);
//     if (order && order.status !== OrderStatus.Pending) {
//         next(error(403, 'It is forbidden to change orders that are not pending'));
//     } else if (order) {
//         for (const key in req.body) {
//             //@ts-ignore                  //I don't know how to fix this TS error so just ignoring
//             order[key] = req.body[key];
//         }
//         res.json({ order });
//     }
//     else
//         next();
// }

// function deleteOrderById(req: Request, res: Response, next: NextFunction) {
//     const orderId = req.query.orderId ? req.query.orderId as string : req.params.orderId;
//     const order = orders.find((it, i) => {
//         if (it.id == orderId) {
//             orders.splice(i, 1);
//             return true;
//         }
//     });

//     if (order) res.json(order);
//     else
//         next();
// }

// function methodNotAllowed(req: Request, res: Response, next: NextFunction) {
//     next(error(405, 'Method Not Allowed'));
//}

export default { getAllMessages, postNewMessage }
