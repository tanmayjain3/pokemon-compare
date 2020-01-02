import React, {useState, useEffect} from "react";
import Layout from "./Layout";
import {getCategories} from "./apiCore";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import {prices} from "./fixdPrices"


const Shop = () =>{

    const [myFilters,setMyFilters] = useState({
        filters:{
            category:[],
            price:[]
        }
    });
    const [categories,setCategories] = useState([]);
    const [error,setError] = useState(false);
    console.log(error);
    const init =() =>{
        getCategories().then(data=>{
            if(data.error){
                setError(data.error);
            } else{
                setCategories(data);
            }
        })
    }

    useEffect(()=>{
        init();
    },[])

    const handleFilters = (filters,filterBy)=>{
        const newFilters = {...myFilters};
        newFilters.filters[filterBy] = filters;

        if(filterBy==="price"){
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy] = priceValues;
        }
        setMyFilters(newFilters);
    }

    const handlePrice = value =>{
        const data = prices;
        let array = [];
        for(let key in data){
            if(data[key]._id===value){
                array=data[key].array;
            }
        }
        return array;
    }

    return (
        <Layout title="Shop Page" className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul>
                        <Checkbox categories={categories} handleFilters={filters=> handleFilters(filters,"category")}/>
                    </ul>
                    <h4>Filter by prices</h4>
                    <div>
                        <Radiobox prices={prices} handleFilters={filters=> handleFilters(filters,"price")}/>
                    </div>
                </div>
                <div className="col-8">
                    {JSON.stringify(myFilters)}
                </div>
            </div>
        </Layout>
    )

}

export default Shop;