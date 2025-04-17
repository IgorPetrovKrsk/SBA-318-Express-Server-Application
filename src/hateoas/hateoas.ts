import { Request, Response } from 'express';

function getRootHateoas(req: Request, res: Response) {
    res.json({
        links: [
            {
                href: '/api',
                rel: 'api',
                type: 'GET',
            },
        ],
    });
}

function getApiHateoas(req: Request, res: Response) {
    res.json({
        links: [
            {
                href: 'api/trucks',
                rel: 'trucks',
                type: 'GET',
            },
            {
                href: 'api/trucks',
                rel: 'trucks',
                type: 'POST',
            },
            {
                href: 'api/trucks',
                rel: 'trucks',
                type: 'DELETE',
            },
            {
                href: 'api/orders',
                rel: 'orders',
                type: 'GET',
            },
            {
                href: 'api/orders',
                rel: 'orders',
                type: 'POST',
            },
            {
                href: 'api/orders',
                rel: 'orders',
                type: 'PUT',
            },
            {
                href: 'api/orders',
                rel: 'orders',
                type: 'DELETE',
            },
        ],
    });
}

function getTrucksLinks(){
    return [
         {
             href: 'trucks/:truckId',
             rel: ':id',
             type: 'GET',
         },
    ];
}

function getTruckByIdLinks(truckId:number){
    return [
        {
            href: `/${truckId}`,
            rel: 'update',
            type: 'PATCH',
        },
        {
            href: `/${truckId}`,
            rel: 'delete',
            type: 'DELETE',
        },
    ];
}

export default { getRootHateoas, getApiHateoas,getTrucksLinks,getTruckByIdLinks}