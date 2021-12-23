import React, {useEffect } from 'react';

import { useAppSelector } from '../redux/hooks';
import {productsStartLoadinig} from '../actions/car';

import { useDispatch } from "react-redux";
import type { AppDispatch } from '../redux/store'


const index = () => {

    const dispatch:AppDispatch = useDispatch()

    useEffect(()=>{
        dispatch(productsStartLoadinig())
    },[dispatch])

    const { products } = useAppSelector( state => state.carProducts );
    
    return (
        <div>
            
                {
                    products.map(
                        data=>(
                            <div key={data.idDrink}> 
                            <b >{data.strDrink}</b>

                            <div> 
                                ingredientes: {data.strIngredient1}, {data.strIngredient2}, {data.strIngredient3}
                            </div>
                            <img src={data.strDrinkThumb} alt="" className='imagenes' />
                            
                            </div>
                            
                        )
                    )
                }
        
        <style jsx>{`
            .imagenes{width:100px} 

            `}
        </style>
            
        </div>
    )
}

export default index
