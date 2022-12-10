import data from "../data/full_data"

function getItems(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(data);
        },2000);
    })
}
export function getSingleItem(id){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(data[id-1]);
        },2000);
    })
}
export function getItemsCategory(param){
    return new Promise((resolve, reject) =>{
        let items = data.filter(item=>{
            return(item.categoria === param)
        })
        items.length > 0 ? resolve(items): reject("No hay productos para esta Categoría") ;
        
    })
}


export default getItems