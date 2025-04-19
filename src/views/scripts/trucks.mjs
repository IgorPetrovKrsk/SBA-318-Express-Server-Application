import axios from "https://cdn.skypack.dev/axios";
const trucksAxios = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/trucks',
    timeout: 5000,
});

const table = document.getElementById('truckTable');
table.addEventListener('click', onTableClick);

async function onTableClick(ev) {
    ev.preventDefault();
    if (ev.target.id.slice(0,14) === 'btn_del_truck_'){
        let truckId = ev.target.id.split('_');
        truckId = truckId[truckId.length -1];
        await trucksAxios.delete(`${truckId}`);
        location.reload(); //reloading current page (it will be more correct just to modify the table using jasascript but I'm too tired to do this)
    }
}