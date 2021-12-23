import { types } from '../types/types';
//import fetch from "isomorphic-unfetch";
import type { AppDispatch } from '../redux/store'

//AGREGA LOS EVENTOS AL STATE
const productsLoaded = (events:any) => ({
    type: types.productsLoaded,
    payload: events
})
export const productsStartLoadinig = () =>{
    return async (dispatch:AppDispatch)=>{
        console.log("prueba")
        try{
            const resp = await fetch( 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' );
            const body = await resp.json();
            console.log(body)
            try{
                dispatch( productsLoaded(body.drinks) );
            }catch{console.log('mi prueba')}
        }catch(error){console.log(error);}

    }
}
