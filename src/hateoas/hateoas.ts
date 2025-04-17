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
                type: 'PUT',
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
             href: 'trucks/:id',
             rel: ':id',
             type: 'GET',
         },
    ];
}
export default { getRootHateoas, getApiHateoas,getTrucksLinks}