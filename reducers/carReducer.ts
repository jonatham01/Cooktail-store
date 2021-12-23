import {types} from '../types/types';

const initialState={
    products:[],
    carProducts:[],
    active:null,
}

export const carReducer= (state=initialState ,action)=>{
    switch(action.type){
        case types.productsLoaded:
            return{
                ...state,
                products:[ ...action.payload ]
            }
        case types.addProduct:
            return{
                ...state,
                carProducts:[...state.carProducts, action.payload]
            }
        case types.activeProduct:
            return{
                ...state,
                active:action.payload
            }
        case types.clearActive:
            return{
                ...state,
                active:null
            }
        case types.uploadCar:
            return{
                ...state,
                carProducts: state.carProducts.map(
                    e => ( e.id===action.payload.id ) ? action.payload : e
                )
            }
        case types.deleteProductCar:
            return{
                ...state,
                carProducts: state.carProducts.filter(
                    e=>( e.id!==state.active.id )                    
                ),
                active:null
            }

        default:
            return state;
    }
}