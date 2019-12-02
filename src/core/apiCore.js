export const getProducts = (sortBy) =>{
    return fetch(`http://localhost:8000/api/products?sortBy=${sortBy}&orderBy=desc&limit=6`, {
        method:"GET"
    })
    .then(response=> {return response.json()})
    .catch(error => console.log(error))
}