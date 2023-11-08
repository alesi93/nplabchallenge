export const getRecentNfes= ()=>{

    return fetch('https://dummyjson.com/users').then((res) => res.json());

};

export const getUserRating= () => {
    return fetch('https://dummyjson.com/users').then((res) => res.json());
};


export const getComments=() => {

    return fetch('https://dummyjson.com/comments').then((res) => res.json());

};

export const getOrders =() =>{
    return fetch('https://dummyjson.com/carts/1').then((res) => res.json());

};