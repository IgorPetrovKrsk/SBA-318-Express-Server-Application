import express from 'express';
import trucks, { Truck, truckTemplate } from '../data/trucks';

const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        //rendering a view instead of returning json
        let tableHeader = ''; //creating dynamic table header 
        Object.keys(truckTemplate).forEach(it => {
            tableHeader += `<th>${it.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}</th>`; //it.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() converts camelCase to normal string
        });
        let tableContent = ''; //creating table of trucks
        trucks.forEach(truck => {
            tableContent += `<tr>`;
            Object.keys(truck).forEach(it => {
                tableContent += `<td>${(truck as any)[it]}</td>`;
            });
            //adding the delete button near every truck
            tableContent += `<td><button id ="btn_del_truck_${truck.id}">Delete</button></td>`;
            tableContent += `</tr>`;
        })

        const data = { title: "This is all the truck in disposal", tableTitle: "Truck List", tableHeader: tableHeader, table: tableContent };
        res.render("trucks", data);
    });
export default router;
