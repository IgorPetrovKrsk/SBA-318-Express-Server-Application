
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

function deleteAllMessages(req: Request, res: Response) {
    messages.length = 0; //clearing the array
    res.json({ messages });
}

// //functions what works with id
function getMessageByTruckId(req: Request, res: Response, next: NextFunction) {
    const truckId: number = req.query.messageId
        ? parseInt(req.query.messageId as string, 0)
        : parseInt(req.params.messageId as string, 0);
    const messageByIdLinks = hateoas.getMessageByIdLinks(truckId);
    const message = messages.filter((it) => it.truckId == truckId);

    if (message)
        res.json({ message, messageByIdLinks });
    else
        next();
}

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

function deleteMessageById(req: Request, res: Response, next: NextFunction) {
    const messageId: number = req.query.messageId
        ? parseInt(req.query.messageId as string, 0)
        : parseInt(req.params.messageId as string, 0);
    const message = messages.find((it, i) => {
        if (it.id == messageId) {
            messages.splice(i, 1);
            return true;
        }
    });

    if (message)
        res.json(message);
    else
        next();
}

function methodNotAllowed(req: Request, res: Response, next: NextFunction) {
    next(error(405, 'Method Not Allowed'));
}

export default { getAllMessages, postNewMessage, deleteAllMessages, methodNotAllowed, getMessageByTruckId, deleteMessageById }
