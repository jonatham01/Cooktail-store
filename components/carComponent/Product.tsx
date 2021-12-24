import React,{useState} from 'react'

import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from "react-redux";
import type { AppDispatch } from '../../redux/store'
import { productoAddCar} from '../../actions/car';
import { setServers } from 'dns/promises';


const Product = ({data}) => {
    
const dispatch:AppDispatch = useDispatch()
const { prices,carProducts  } = useAppSelector( state => state.carProducts );

const [state, setstate] = useState('1')
const addValue = (e) =>{
    setstate(e.target.value)
}
const addProduct =(product:any)=>{

    if(!carProducts.includes(product)){
        product= {...product,amount:state}
        dispatch(productoAddCar(product))
        console.log(product)
    }
    
}
    return (
        <div key={data.idDrink} className="container-card"> 

                           
                            <img src={data.strDrinkThumb} alt="" className='imagenes' />
                            <div> 
                           
                             <strong>   Ingredients:</strong> <hr />
                                 {data.strIngredient1}, {data.strIngredient2}, {data.strIngredient3}
                            </div>
                            <br /><strong>Price:</strong> <hr />
                            {prices.map(price=>price.idDrink===data.idDrink &&(<p key={price.valueDolar}>{price.valueDolar} Dolars</p>))
                                }
                            
                           <input type="text" value={state} onChange={addValue} />
                            <button onClick={()=>{addProduct(data)}}>ADD TO CAR</button>
                           
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

export default Product
