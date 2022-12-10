import data from "../data/full_data"

function getItems(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(data);
        },2000);
    })
}
export function getSingleItem(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(data[3]);
        },2000);
    })
}


export default getItems