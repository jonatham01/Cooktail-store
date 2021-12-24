import {types} from '../types/types';

const initialState={
    products:[],
    carProducts:[],
    carOrder:[],
    active:null,
    prices:[
        {idDrink: '11007',valueDolar:'10'},
        {idDrink:'11118' ,valueDolar:'10'},
        {idDrink: '17216',valueDolar:'10'},
        {idDrink: '16158',valueDolar:'10'},
        {idDrink: '12322',valueDolar:'10'},
        {idDrink: '178332',valueDolar:'10'}
    ]
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
        case types.addOrder:
            return{
                ...state,
                carOrder:[...state.carOrder, action.payload]
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