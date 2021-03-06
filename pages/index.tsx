import React, {useEffect,useState } from 'react';

import { useAppSelector } from '../redux/hooks';
import {productsStartLoadinig, productoAddCar} from '../actions/car';

import { useDispatch } from "react-redux";
import type { AppDispatch } from '../redux/store'

import Product from '../components/carComponent/Product'


const index = () => {

    const dispatch:AppDispatch = useDispatch()

    useEffect(()=>{
        dispatch(productsStartLoadinig())
    },[dispatch])

    const { products, carProducts,carOrder } = useAppSelector( state => state.carProducts );

    let num= carProducts.length;
/*
    const addProduct =(product:any)=>{

        if(!carProducts.includes(product)){
            product= {...product,num}
            dispatch(productoAddCar(product))
            console.log(product)
        }
        
    }
    */
    //const [stateNum, setstateNum] = useState(1)
    
    return (
        <div className='container'>
            {num!==0 && <a href="#list">Go to my order</a> }
            <section>
            

            {
                    products.map(
                        data=>(
                            <Product data={data} key={data.idDrink}  /> 

                        )
                    )
                }
        
            </section>
            {num!==0 && <h2 id='list'>My Order <hr /></h2> }

            <section>
                
            {
                    carOrder.map(
                        data=>(
                            <div key={data.idDrink} className="container-card"> 

                           
                            <img src={data.strDrinkThumb} alt="" className='imagenes' />
                            <p>Amount :{data.amount} </p>
                            <b className='card-name' >{data.strDrink}</b> <br />
                            
                            </div>
                            
                        )
                    )
                }
            </section>
                
        <style jsx>{`
        body{padding:0; margin:0;}
            .imagenes{width:100%} 
            .container{
                width: 100%;
                margin: 0;
                padding: 0;
                display: grid;
                width:100%;
                
                place-items: center;
                background-color: rgb(240,240,240);
              }
              
              section{
                width: 1000px;
                background-color: rgb(240,240,240);
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                margin-top: 50px;
                padding: 0;
                display:grid;
                grid-template-columns: 1fr 1fr 1fr;
              }
              .container-card{
                  padding:16px 8px;
                  border: black solid 1px;
                  border-radius:5px;
                  margin:8px;
                  background-color: rgb(250,250,250);
              }
              .card-name{
                  padding: 10px ;
                  font-size: 32px;
                  color:black;
                  
              }

            `}
        </style>
            
        </div>
    )
}

export default index
