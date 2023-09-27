import { createContext  , useReducer} from "react"

const AppReducer = (state , action) => {
    switch(action.type){
        default:
            return state;
    }
}


const initialState = {
    budget : 2000 ,
    expenses : [
        { id : 1 , name : 'shooping ' , cost : 40},
        { id : 12 , name : 'holiday ' , cost : 40},
        { id : 123 , name : 'shooping ' , cost : 40},
    ]
}

export const AppContex = createContext();

export const AppProvider = (props) => {
    const [state , dispatch] = useReducer(AppReducer , initialState)
    return( <AppContex.Provider
    value={{
        budget : state.budget ,
        expenses : state.expenses,
        dispatch
    }}> {props.children}
        
    </AppContex.Provider>)
}